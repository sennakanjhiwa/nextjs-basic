import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

export const metadata = {
  title: "Blog",
  description: "Halaman blog kami",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
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
    </div>
  );
}
