"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Sticky effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Jobs", href: "/browse-jobs" },
    { name: "Candidates", href: "/candidates" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-[#122649] shadow-lg" : "bg-transparent"}`}
      >
        <div className="custom-container">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="JobAgora"
                width={140}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link text-sm transition ${
                    pathname === link.href ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link href="/post" className="btn secondary-button text-sm">
                Post a Job
              </Link>
            </nav>

            {/* Mobile Button */}
            <button
              className="lg:hidden text-2xl text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div
          className=" mobile-menu fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute top-16 left-0 w-full bg-[#122649] p-6 animate-slideDown"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/post"
                onClick={() => setOpen(false)}
                className="secondary-button text-center py-2 rounded"
              >
                Post a Job
              </Link>

              <Link
                href="/jobs"
                onClick={() => setOpen(false)}
                className="primary-button text-center py-2 rounded"
              >
                Want a Job
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

