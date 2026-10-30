"use client";

import { useState, type ReactNode } from "react";
import { previewUrl, downloadUrl } from "@/data/materials";
import styles from "./MaterialViewer.module.css";

export interface ViewerFile {
  label: string; // «Конспект», «Презентація», «Завдання»
  id: string; // ID на Google Drive
  format: string; // pdf / docx / pptx
}

interface Props {
  files: ViewerFile[];
  children?: ReactNode; // додаткові кнопки (наприклад, «Опрацьовано»)
}

export default function MaterialViewer({ files, children }: Props) {
  const [active, setActive] = useState(0);
  const file = files[active] ?? files[0];

  return (
    <div>
      {files.length > 1 && (
        <div className={styles.tabs} role="tablist">
          {files.map((f, i) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              {f.label}
              <span className={styles.tabFormat}>{f.format.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}

      <div className={styles.actions}>
        <a href={downloadUrl(file.id)} className={styles.download}>
          Завантажити ({file.format.toUpperCase()})
        </a>
        <a
          href={`https://drive.google.com/file/d/${file.id}/view`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondary}
        >
          Відкрити в Google Drive
        </a>
        {children}
      </div>

      <div
        className={`${styles.viewer} ${file.format === "pptx" ? styles.slides : ""}`}
      >
        {/* key: при зміні файлу iframe створюється заново (і плавно з’являється) */}
        <iframe
          key={file.id}
          src={previewUrl(file.id)}
          title={file.label}
          allow="autoplay"
        />
      </div>
    </div>
  );
}
