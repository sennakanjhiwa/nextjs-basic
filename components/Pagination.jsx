import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Pagination({ href, page, pageCount }) {
  return (
    <div className="flex gap-3 justify-center items-center my-6">
      <PaginationLink
        href={`${href}?page=${page - 1}`}
        className="text-blue-700 hover:text-blue-800 hover:font-bold"
        enabled={page > 1}
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </PaginationLink>
      <span className="text-sm font-semibold text-slate-800">
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        className="text-blue-700 hover:text-blue-800 hover:font-bold"
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="w-4 h-4" />
      </PaginationLink>
    </div>
  );
}

function PaginationLink({ children, href, enabled }) {
  if (!enabled) {
    return <span className="text-gray-400 cursor-not-allowed">{children}</span>;
  }
  return (
    <Link
      href={href}
      className="text-blue-700 hover:text-blue-800 hover:font-bold"
    >
      {children}
    </Link>
  );
}
