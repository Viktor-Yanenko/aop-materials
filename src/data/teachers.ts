export interface Teacher {
  name: string;
  role: string;    // що веде: лекції, практичні тощо
  email?: string;  // необов’язково
}

export const teachers: Teacher[] = [
  {
    name: "Віктор Яненко",
    role: "Лекції та практичні заняття",
    email: "yanenkov_v@sclnau.com.ua",
  },
  {
    name: "Любов Яцків",
    role: "Лекції та практичні заняття",
  },
];

export function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}