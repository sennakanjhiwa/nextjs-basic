import Navbar from "@/components/Navbar";
import "./globals.css";
import { inter } from "@/app/fonts";

export const metadata = {
  title: {
    default: "Next.js Basic",
    template: "%s | Next.js Basic",
  },
  description: "Situs ini adalah untuk belajar membuat project NEXT.js",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
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
