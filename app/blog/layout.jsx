export default function Layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-xl min-h-screen">
      <div className="flex-1 p-6">{children}</div>
      <Sidebar />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="w-full lg:w-64 border-t lg:border-t-0 lg:border-s border-slate-600/25 p-6">
      <nav>
        <div className="text-lg font-semibold mb-4 text-gray-700">
          Popular Posts
        </div>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-500 hover:underline"
            >
              Post 1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-500 hover:underline"
            >
              Post 2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-500 hover:underline"
            >
              Post 3
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
