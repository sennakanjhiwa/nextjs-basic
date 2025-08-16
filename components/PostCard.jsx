import Link from "next/link";

export default function PostCard({
  image,
  title,
  href,
  description,
  date,
  author,
}) {
  return (
    <div className="p-4 border border-slate-800/20 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4">
      <img
        src={image}
        alt={title}
        className="w-22 h-22 object-cover rounded-md"
      />
      <div>
        <h2 className="text-2xl font-semibold">
          <Link href={href} className="text-slate-600 hover:underline">
            {title}
          </Link>
        </h2>
        <div className="text-sm text-slate-500 mt-1">
          Diposting oleh <span className="font-medium">{author}</span> pada{" "}
          {date}
        </div>
        <p className="text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
}
