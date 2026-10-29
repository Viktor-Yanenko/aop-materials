export type MaterialType = "lecture" | "practical";

export interface Material {
  slug: string;        // частина адреси: /materials/lecture-1
  type: MaterialType;
  number: number;      // номер лекції / практичної
  title: string;
  description?: string;
    driveId: string;
    format: "pdf" | "docx";  // ID файлу на Google Drive
}

export const materials: Material[] = [
  {
    slug: "lecture-1",
    type: "lecture",
    number: 1,
    title: "Вступ до дисципліни. Алгоритми і програми",
    // description: "Поняття алгоритму, властивості, способи запису.",
    driveId: "1qwbmcG34FU4uIhcyk8nt_1pIKt4-du60",
    format: "pdf",
  },
  {
    slug: "lecture-2",
    type: "lecture",
    number: 2,
    title: "Способи подання алгоритмів",
    // description: "Поняття алгоритму, властивості, способи запису.",
    driveId: "19Ln4Ri_yAfxVaoJt7hoLxbV4tu7s4joq",
    format: "pdf",
  },
  {
    slug: "lecture-3",
    type: "lecture",
    number: 3,
    title: "Основні керуючі структури алгоритмів",
    // description: "Поняття алгоритму, властивості, способи запису.",
    driveId: "1Evwz4AQ-Sb9l_B40CpOK4RoBdCXnoNOk",
    format: "pdf",
  },
  {
    slug: "lecture-4",
    type: "lecture",
    number: 4,
    title: "Лінійні алгоритми",
    // description: "Поняття алгоритму, властивості, способи запису.",
    driveId: "1BxkJGonTQ-txAs91eDct-nVeYHriOikn",
    format: "pdf",
  },
  {
    slug: "practical-1",
    type: "practical",
    number: 1,
    title: "Розробка блок-схем алгоритмів лінійних обчислювальних процесів",
    driveId: "1ytiio86zkntHdEDtkhxb_FrLZxbvQKXR",
    format: "docx",
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

export const previewUrl = (id: string) =>
  `https://drive.google.com/file/d/${id}/preview`;

export const downloadUrl = (id: string) =>
  `https://drive.google.com/uc?export=download&id=${id}`;