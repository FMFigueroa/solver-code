import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900">
      <div className="container flex justify-between items-center py-3">
        <Link className="hover:text-slate-200" href="/">
          <h3 className="font-bold text-3xl">Next</h3>
        </Link>
        <ul className="flex gap-x-4 font-bold text-lg">
          <li>
            <Link className="text-slate-300 hover:text-slate-200" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-slate-300 hover:text-slate-200" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-slate-300 hover:text-slate-200" href="/chat">
              Chat
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
