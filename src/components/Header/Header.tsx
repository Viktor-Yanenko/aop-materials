"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

const links = [
  { href: "/", label: "Головна", hideOnMobile: true },
  { href: "/lectures", label: "Лекції" },
  { href: "/practicals", label: "Практичні" },
];

export default function Header() {
  const pathname = usePathname();

  // Головна активна лише на "/", інші розділи також на вкладених сторінках
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="На головну">
          <span className={styles.logoFull}>
            Алгоритмізація та основи програмування
          </span>
          <span className={styles.logoShort}>АОП</span>
        </Link>
        <nav className={styles.nav}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${isActive(l.href) ? styles.active : styles.link} ${
                l.hideOnMobile ? styles.hideMobile : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
