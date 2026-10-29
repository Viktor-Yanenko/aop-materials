"use client";

import { useProgress } from "@/lib/progress";
import styles from "./DoneButton.module.css";

export default function DoneButton({ slug }: { slug: string }) {
  const { done, toggle } = useProgress();
  const isDone = done.has(slug);

  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      className={`${styles.button} ${isDone ? styles.done : ""}`}
      aria-pressed={isDone}
    >
      {isDone ? "✓ Опрацьовано" : "Позначити як опрацьоване"}
    </button>
  );
}
