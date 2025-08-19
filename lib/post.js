import { marked } from "marked";
import qs from "qs";

export const CACHE_TAG_POSTS = "posts";

const BACKEND_URL = "http://localhost:1337";

export async function getPost(slug) {
  const { data } = await fetchPosts({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    fields: ["slug", "title", "description", "publishedAt", "body"],
    populate: {
      image: { fields: ["url"] },
      author: {
        fields: ["username"], // ambil field yang kamu butuhkan
      },
    },
    pagination: { pageSize: 1, withCount: false },
  });
  if (data.length === 0) {
    return null; // Jika tidak ada post dengan slug tersebut
  }
  const item = data[0];
  return {
    ...toPost(item),
    body: marked(item.body, { headerIds: false, mangle: false }),
  };
}

export async function getAllPosts(pageSize, page) {
  const { data, meta } = await fetchPosts({
    fields: ["slug", "title", "description", "publishedAt", "body"],
    populate: {
      image: { fields: ["url"] },
      author: {
        fields: ["username"], // ambil field yang kamu butuhkan
      },
    },
    sort: ["publishedAt:desc"],
    pagination: { pageSize, page },
  });
  return {
    posts: data.map(toPost),
    pageCount: meta.pagination.pageCount,
  };
}

export async function getSlugs() {
  const { data } = await fetchPosts({
    fields: ["slug"],
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 1000 }, // Ambil semua slug yang ada
  });
  return data.map((item) => item.slug);
}

async function fetchPosts(parameters) {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(parameters, { encodeValuesOnly: true });
  const response = await fetch(url, {
    next: { tags: [CACHE_TAG_POSTS] },
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

function toPost(item) {
  return {
    slug: item.slug,
    title: item.title,
    description: item.description,
    author: item.author?.username ?? null,
    date: item.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: BACKEND_URL + item.image?.url ?? null,
  };
}
