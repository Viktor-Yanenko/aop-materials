import MaterialList from "@/components/MaterialList/MaterialList";
import {
  sections,
  getMaterialsByType,
  type MaterialType,
} from "@/data/materials";
import styles from "./SectionedList.module.css";

export default function SectionedList({ type }: { type: MaterialType }) {
  const all = getMaterialsByType(type);

  return (
    <>
      {sections.map((s) => {
        const items = all.filter((m) => m.section === s.id);
        if (items.length === 0) return null;
        return (
          <section key={s.id} className={styles.block}>
            <p className={styles.meta}>Розділ {s.number}</p>
            <h2 className={styles.heading}>{s.title}</h2>
            <MaterialList items={items} />
          </section>
        );
      })}
    </>
  );
}
