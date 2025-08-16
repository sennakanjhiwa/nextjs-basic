import Heading from "@/components/Heading";
import { getPost, getSlugs } from "@/lib/post";
import ShareLinkButton from "@/components/ShareLinkButton";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <>
      <Heading>{post.title}</Heading>
      <div className="flex justify-center space-x-2 text-sm mb-6">
        <p className="text-gray-500 py-1">
          {post.date} - {post.author}
        </p>
        <ShareLinkButton />
      </div>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto rounded-lg mb-4"
      />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="markdown"
      />
    </>
  );
}
