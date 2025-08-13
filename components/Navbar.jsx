import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center p-4">
      <span className="text-lg font-bold">Nextjs Basic</span>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-200">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-200">
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            prefetch={false}
            className="hover:text-gray-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
