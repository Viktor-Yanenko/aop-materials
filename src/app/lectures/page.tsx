import type { Metadata } from "next";
import MaterialList from "@/components/MaterialList/MaterialList";
import { getMaterialsByType } from "@/data/materials";

export const metadata: Metadata = {
  title: "Лекції | АОП",
};

export default function LecturesPage() {
  return (
    <>
      <h1 className="page-title">Лекції</h1>
      <p className="page-subtitle">Конспекти лекцій у форматі PDF.</p>
      <MaterialList items={getMaterialsByType("lecture")} />
    </>
  );
}
