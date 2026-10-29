import Link from "next/link";
import { Material, typeLabels } from "@/data/materials";
import styles from "./MaterialList.module.css";

interface Props {
  items: Material[];
}

export default function MaterialList({ items }: Props) {
  if (items.length === 0) {
    return <p className={styles.empty}>Матеріали ще не додані.</p>;
  }

  return (
    <ul className={styles.list}>
      {items.map((m) => (
        <li key={m.slug}>
          <Link href={`/materials/${m.slug}`} className={styles.item}>
            <span className={styles.label}>
              {typeLabels[m.type]} {m.number}
            </span>
            <span className={styles.title}>{m.title}</span>
            {m.description && (
              <span className={styles.description}>{m.description}</span>
            )}
            <span className={styles.format}>{m.format.toUpperCase()}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
