export type MaterialType = "lecture" | "practical";

export interface Section {
  id: string;      // внутрішній ідентифікатор, латиницею
  module: number;  // номер модуля
  number: number;  // номер розділу
  title: string;
}

export interface Material {
  slug: string;        // частина адреси: /materials/lecture-1
  type: MaterialType;
  number: number;      // номер лекції / практичної
  title: string;
  description?: string;
    driveId: string;
  format: "pdf" | "docx";  // ID файлу на Google Drive
  section: string;
}

// Розділи в порядку робочої програми
export const sections: Section[] = [
  { id: "algorithms", module: 1, number: 1, title: "Основи алгоритмізації" },
  { id: "python", module: 2, number: 2, title: "Основи програмування та мови Python" },
];


export const materials: Material[] = [
  {
    slug: "lecture-1",
    type: "lecture",
    number: 1,
    title: "Вступ до дисципліни. Алгоритми і програми",
    driveId: "1qwbmcG34FU4uIhcyk8nt_1pIKt4-du60",
    format: "pdf",
    section: "algorithms",
  },
  {
    slug: "lecture-2",
    type: "lecture",
    number: 2,
    title: "Способи подання алгоритмів",
    driveId: "19Ln4Ri_yAfxVaoJt7hoLxbV4tu7s4joq",
    format: "pdf",
    section: "algorithms",
  },
  {
    slug: "lecture-3",
    type: "lecture",
    number: 3,
    title: "Основні керуючі структури алгоритмів",
    driveId: "1Evwz4AQ-Sb9l_B40CpOK4RoBdCXnoNOk",
    format: "pdf",
    section: "algorithms",
  },
  {
    slug: "lecture-4",
    type: "lecture",
    number: 4,
    title: "Лінійні алгоритми",
    driveId: "1BxkJGonTQ-txAs91eDct-nVeYHriOikn",
    format: "pdf",
    section: "algorithms",
  },
  {
    slug: "practical-1",
    type: "practical",
    number: 1,
    title: "Розробка блок-схем алгоритмів лінійних обчислювальних процесів",
    driveId: "1ytiio86zkntHdEDtkhxb_FrLZxbvQKXR",
    format: "docx",
    section: "algorithms",
  },
    {
    slug: "lecture-5",
    type: "lecture",
    number: 5,
    title: "Розгалужені алгоритми. Умовні оператори",
    driveId: "ВСТАВ_ID_ФАЙЛУ",
    format: "pdf",
    section: "algorithms",
  },
  {
    slug: "practical-2",
    type: "practical",
    number: 2,
    title: "Розробка блок-схем алгоритмів розгалужених процесів",
    driveId: "ВСТАВ_ID_ФАЙЛУ",
    format: "docx",
    section: "algorithms",
  },
  {
    slug: "lecture-6",
    type: "lecture",
    number: 6,
    title: "Циклічні алгоритми",
    driveId: "ВСТАВ_ID_ФАЙЛУ",
    format: "pdf",
    section: "algorithms",
  },
  {
    slug: "practical-3",
    type: "practical",
    number: 3,
    title: "Розробка блок-схем алгоритмів циклічних процесів",
    driveId: "ВСТАВ_ID_ФАЙЛУ",
    format: "docx",
    section: "algorithms",
  },

  //  --- Модуль 2: Основи програмування та мови Python ---
  {
    slug: "lecture-7",
    type: "lecture",
    number: 7,
    title: "Арифметичні основи ЕОМ. Системи числення",
    driveId: "id",
    format: "pdf",
    section: "python",
  },
];

export const typeLabels: Record<MaterialType, string> = {
  lecture: "Лекція",
  practical: "Практична робота",
};

export function getMaterialsByType(type: MaterialType): Material[] {
  return materials
    .filter((m) => m.type === type)
    .sort((a, b) => a.number - b.number);
}

export function getMaterialBySlug(slug: string): Material | undefined {
  return materials.find((m) => m.slug === slug);
}

export function getSection(id: string): Section | undefined {
  return sections.find((s) => s.id === id);
}

export const previewUrl = (id: string) =>
  `https://drive.google.com/file/d/${id}/preview?hl=uk`;

export const downloadUrl = (id: string) =>
  `https://drive.google.com/uc?export=download&id=${id}`;