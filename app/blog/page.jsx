import Heading from "@/components/Heading";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

export const revalidate = 30;

export const metadata = {
  title: "Blog",
  description: "Halaman blog kami",
};

export default async function BlogPage({ searchParams }) {
  const page = parsePageParam(searchParams.page);
  const { pageCount, posts } = await getAllPosts(3, page);
  console.log(posts);
  return (
    <div className="mx-auto">
      <Heading>My Next.js Blog Page</Heading>
      <hr className="border-gray-300 mb-6" />
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            href={`/blog/${post.slug}`}
            image={post.image}
            description={post.description}
            date={post.date}
            author={post.author}
          />
        ))}
      </div>
      <Pagination href="/blog" page={page} pageCount={pageCount} />
    </div>
  );
}

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1; // Default to page 1 if invalid
}
