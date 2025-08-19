import Heading from "@/components/Heading";

export const metadata = {
  title: "Belajar NEXT.js Fundamental",
  description: "Situs ini adalah untuk belajar membuat project NEXT.js",
};

export default function Home() {
  return (
    <div className="p-6">
      <Heading>My Next.js App</Heading>
      <p className="text-center">Hello world, this is my Next.js app</p>
    </div>
  );
}
