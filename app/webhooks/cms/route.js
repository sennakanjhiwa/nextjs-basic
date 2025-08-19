import { revalidateTag } from "next/cache";
import { CACHE_TAG_POSTS } from "@/lib/post";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  if (payload.model === "post") {
    revalidateTag(CACHE_TAG_POSTS);
    console.log("revalidated:", CACHE_TAG_POSTS);
  }
  return new Response(null, { status: 204 });
}
