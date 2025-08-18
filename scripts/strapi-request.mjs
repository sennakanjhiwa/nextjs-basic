import { writeFileSync } from "node:fs";
import qs from "qs";

const url =
  "http://localhost:1337/api/posts" +
  "?" +
  qs.stringify(
    {
      fields: ["slug", "title", "description", "publishedAt", "body"],
      populate: {
        image: { fields: ["url"] },
        author: {
          fields: ["username", "email"], // ambil field yang kamu butuhkan
        },
      },
      sort: ["publishedAt:desc"],
      pagination: { pageSize: 2 },
    },
    { encodeValuesOnly: true }
  );
const response = await fetch(url);
const body = await response.json();
const posts = JSON.stringify(body, null, 2);

const file = "scripts/strapi-response.json";
writeFileSync(file, posts, "utf8");
