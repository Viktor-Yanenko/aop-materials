import Link from "next/link";
import { materials, getMaterialsByType } from "@/data/materials";
import styles from "./page.module.css";
import { teachers, initials } from "@/data/teachers";

export default function Home() {
  const lectures = getMaterialsByType("lecture");
  const practicals = getMaterialsByType("practical");
  const first = materials[0]; // перший матеріал за робочою програмою

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Навчальна дисципліна</p>
        <h1 className={styles.title}>Алгоритмізація та основи програмування</h1>
        <p className={styles.lead}>
          Лекції та практичні роботи курсу в порядку робочої програми.
          Переглядайте матеріали онлайн або завантажуйте собі.
        </p>
        {first && (
          <Link href={`/materials/${first.slug}`} className={styles.button}>
            Почати навчання
          </Link>
        )}
      </section>

      <section className={styles.cards}>
        <Link href="/lectures" className={styles.card}>
          <h2>Лекції</h2>
          <p>{lectures.length} матеріалів у PDF</p>
        </Link>
        <Link href="/practicals" className={styles.card}>
          <h2>Практичні роботи</h2>
          <p>{practicals.length} завдань у DOCX</p>
        </Link>
      </section>

      <section className={styles.teachers}>
        <h2 className={styles.teachersTitle}>Викладачі</h2>
        <ul className={styles.teacherList}>
          {teachers.map((t) => (
            <li key={t.name + t.role} className={styles.teacher}>
              <span className={styles.avatar} aria-hidden="true">
                {initials(t.name)}
              </span>
              <div>
                <p className={styles.teacherName}>{t.name}</p>
                <p className={styles.teacherRole}>{t.role}</p>
                {t.email && (
                  <a href={`mailto:${t.email}`} className={styles.teacherEmail}>
                    {t.email}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
