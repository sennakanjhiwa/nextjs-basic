import matter from "gray-matter";
import { marked } from "marked";
import { readdir, readFile } from "node:fs/promises";
import qs from "qs";

const BACKEND_URL = "http://localhost:1337";

export async function getPost(slug) {
  const text = await readFile(`./content/blog/${slug}.md`, "utf-8");
  const {
    content,
    data: { title, image, description, date, author },
  } = matter(text);
  const body = marked(content);
  return { slug, title, image, description, date, author, body };
}

export async function getAllPosts() {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(
      {
        fields: ["slug", "title", "description", "publishedAt", "body"],
        populate: {
          image: { fields: ["url"] },
          author: {
            fields: ["username"], // ambil field yang kamu butuhkan
          },
        },
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 2 },
      },
      { encodeValuesOnly: true }
    );
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    author: item.author?.username ?? null,
    date: item.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: BACKEND_URL + item.image?.url ?? null,
  }));
}

export async function getSlugs() {
  const files = await readdir("./content/blog");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
