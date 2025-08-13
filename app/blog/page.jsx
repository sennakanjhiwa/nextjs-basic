import Heading from "../../components/Heading";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="mx-auto">
      <Heading>My Next.js Blog Page</Heading>
      <hr className="border-gray-300 mb-6" />
      <div className="space-y-6">
        <div className="p-4 border border-slate-800/20 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold">
            <Link
              href="/blog/judul-berita"
              className="text-slate-600 hover:underline"
            >
              Judul Berita
            </Link>
          </h2>
        </div>
        <div className="p-4 border border-slate-800/20 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold">
            <Link
              href="/blog/latihan-route-next"
              className="text-slate-600 hover:underline"
            >
              Latihan Route Next
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
