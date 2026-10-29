import { teachers } from "@/data/teachers";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.course}>
            Алгоритмізація та основи програмування
          </p>
          <p className={styles.meta}>Навчальні матеріали · {year}</p>
        </div>

        <ul className={styles.teachers}>
          {teachers.map((t) => (
            <li key={t.name}>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.role}>{t.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
