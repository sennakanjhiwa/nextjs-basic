import Heading from "@/components/Heading";

export const metadata = {
  title: "About",
  description: "Halaman tentang kami",
};

export default function About() {
  return (
    <div className="p-6">
      <Heading>Halaman About Saya</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        doloremque amet consectetur fugit quos hic doloribus sunt fuga eaque
        sapiente nihil consequatur placeat esse dolores praesentium facilis,
        dolor nemo similique!
      </p>
    </div>
  );
}
