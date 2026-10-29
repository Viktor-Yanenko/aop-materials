import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./layout.module.css";

export default function MaterialsLayout({
  children,
}: LayoutProps<"/materials">) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
