"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Candidates", href: "/candidates" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-transparent text-white relative z-20">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Skillhunt
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm hover:text-blue-400 transition ${
                  pathname === link.href ? "text-blue-400" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* CTA buttons */}
            <Link
              href="/post-job"
              className="border border-blue-500 text-blue-400 px-4 py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white transition"
            >
              Post a Job
            </Link>

            <Link
              href="/jobs"
              className="bg-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
            >
              Want a Job
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm hover:text-blue-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/post-job"
              onClick={() => setOpen(false)}
              className="border border-blue-500 text-blue-400 px-4 py-2 rounded-md text-sm text-center"
            >
              Post a Job
            </Link>

            <Link
              href="/jobs"
              onClick={() => setOpen(false)}
              className="bg-blue-600 px-4 py-2 rounded-md text-sm text-center"
            >
              Want a Job
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
