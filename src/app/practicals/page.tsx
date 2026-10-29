import type { Metadata } from "next";
import SectionedList from "@/components/SectionedList/SectionedList";

export const metadata: Metadata = {
  title: "Практичні роботи | АОП",
};

export default function PracticalsPage() {
  return (
    <>
      <h1 className="page-title">Практичні роботи</h1>
      <p className="page-subtitle">Завдання до практичних у форматі DOCX.</p>
      <SectionedList type="practical" />
    </>
  );
}
