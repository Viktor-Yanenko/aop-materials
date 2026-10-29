import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./layout.module.css";

export default function MaterialsLayout({
  children,
}: LayoutProps<"/materials">) {
  return (
    <div className={styles.wrapper} data-docs>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
