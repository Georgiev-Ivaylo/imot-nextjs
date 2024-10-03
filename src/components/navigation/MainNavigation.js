"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
  const currentPath = usePathname();

  return (
    <header className="nav-grid">
      <Link
        href="/"
        className={`nav-btn ${currentPath === "/" ? "active" : ""}`}
      >
        Home
      </Link>

      <Link
        href="/estates?order_by=price"
        className={`nav-btn ${currentPath === "/estates" ? "active" : ""}`}
      >
        Estates
      </Link>
    </header>
  );
}
