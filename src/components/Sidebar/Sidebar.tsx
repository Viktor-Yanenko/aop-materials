"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { materials, sections } from "@/data/materials";
import { useProgress } from "@/lib/progress";
import styles from "./Sidebar.module.css";

const shortLabels = {
  lecture: "Лекція",
  practical: "ПР",
};

export default function Sidebar() {
  const pathname = usePathname().replace(/\/$/, "");
  const [open, setOpen] = useState(false);
  const { done } = useProgress();
  const navRef = useRef<HTMLElement>(null);

  const doneCount = materials.filter((m) => done.has(m.slug)).length;
  const percent = Math.round((doneCount / materials.length) * 100);

  // при зміні сторінки прокручуємо список так, щоб активний пункт був посередині
  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!nav || !active) return;
    nav.scrollTo({
      top: active.offsetTop - nav.clientHeight / 2 + active.clientHeight / 2,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <aside className={styles.sidebar}>
      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? "Сховати зміст" : "Зміст"}
      </button>

      <nav ref={navRef} className={`${styles.nav} ${open ? styles.open : ""}`}>
        <div className={styles.progress}>
          <div className={styles.progressText}>
            Опрацьовано {doneCount} з {materials.length}
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {sections.map((s) => {
          const items = materials.filter((m) => m.section === s.id);
          if (items.length === 0) return null;
          const sectionDone = items.filter((m) => done.has(m.slug)).length;

          return (
            <details key={s.id} className={styles.section} open>
              <summary className={styles.sectionHeader}>
                <span className={styles.sectionModule}>Розділ {s.number}</span>
                <span className={styles.sectionTitle}>{s.title}</span>
                <span className={styles.sectionCount}>
                  {sectionDone}/{items.length}
                </span>
              </summary>

              <ol className={styles.list}>
                {items.map((m) => {
                  const href = `/materials/${m.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={m.slug}>
                      <Link
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={`${styles.item} ${active ? styles.active : ""} ${
                          m.type === "practical" ? styles.practical : ""
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <span className={styles.label}>
                          {shortLabels[m.type]} {m.number}
                        </span>
                        <span className={styles.title}>
                          {done.has(m.slug) && (
                            <span className={styles.check}>✓ </span>
                          )}
                          {m.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </details>
          );
        })}
      </nav>
    </aside>
  );
}
