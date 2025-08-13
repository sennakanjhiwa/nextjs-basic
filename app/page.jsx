import Heading from "../components/Heading";

export default function Home() {
  console.log("Hello Om");
  return (
    <div className="p-6">
      <Heading>My Next.js App</Heading>
      <p className="text-center">Hello world, this is my Next.js app</p>
    </div>
  );
}
