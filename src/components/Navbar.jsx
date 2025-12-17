import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          JobPortal
        </Link>

        <div className="space-x-6">
          <Link href="/jobs" className="text-gray-600 hover:text-black">
            Jobs
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-black">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
