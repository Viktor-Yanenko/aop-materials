import type { Metadata } from "next";
import MaterialList from "@/components/MaterialList/MaterialList";
import { getMaterialsByType } from "@/data/materials";

export const metadata: Metadata = {
  title: "Практичні роботи | АОП",
};

export default function PracticalsPage() {
  return (
    <>
      <h1 className="page-title">Практичні роботи</h1>
      <p className="page-subtitle">Завдання до практичних у форматі DOCX.</p>
      <MaterialList items={getMaterialsByType("practical")} />
    </>
  );
}
