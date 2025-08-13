import Navbar from "../components/Navbar";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nextjs Basic</title>
      </head>
      <body className="min-h-screen flex flex-col bg-gray-200 text-gray-800">
        <header className="bg-slate-600 text-white shadow-md">
          <Navbar />
        </header>
        <main className="container mx-auto my-6 bg-white shadow-md rounded-xl mt-6 flex-grow">
          {children}
        </main>
        <footer className="bg-slate-800 text-white text-center py-4 mt-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Nextjs Basic. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
