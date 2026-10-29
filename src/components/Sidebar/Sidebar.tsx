"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { materials } from "@/data/materials";
import styles from "./Sidebar.module.css";
import { useProgress } from "@/lib/progress";

const shortLabels = {
  lecture: "Лекція",
  practical: "ПР",
};

export default function Sidebar() {
  const pathname = usePathname().replace(/\/$/, ""); // прибираємо кінцевий "/"
  const [open, setOpen] = useState(false);
  const { done } = useProgress();
  const doneCount = materials.filter((m) => done.has(m.slug)).length;
  const percent = Math.round((doneCount / materials.length) * 100);

  return (
    <aside className={styles.sidebar}>
      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? "Сховати зміст" : "Зміст"}
      </button>

      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
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
        <ol className={styles.list}>
          {materials.map((m) => {
            const href = `/materials/${m.slug}`;
            const active = pathname === href;
            return (
              <li key={m.slug}>
                <Link
                  href={href}
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
      </nav>
    </aside>
  );
}
