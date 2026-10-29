export type MaterialType = "lecture" | "practical";
 
export interface Section {
  id: string;     // внутрішній ідентифікатор, латиницею
  number: number; // номер розділу
  title: string;
}
 
export interface Material {
  slug: string;
  type: MaterialType;
  number: number;
  title: string;
  description?: string;
  driveId: string; // порожній рядок = файл ще не додано
  format: "pdf" | "docx";
  section: string; // id розділу з масиву sections
}
 
// Розділи в порядку робочої програми
export const sections: Section[] = [
  { id: "algorithms", number: 1, title: "Основи алгоритмізації" },
  { id: "python-intro", number: 2, title: "Основи програмування та мови Python" },
  { id: "python-basics", number: 3, title: "Базові можливості мови Python" },
  { id: "constructs", number: 4, title: "Розширені можливості базових конструкцій" },
  { id: "data-functions", number: 5, title: "Структуровані дані та функції" },
  { id: "files-modules", number: 6, title: "Робота з файлами та модулями" },
];
 
// Допоміжні функції, щоб не повторювати slug / type / format у кожному записі.
// Лекції завжди PDF, практичні завжди DOCX.
function lecture(
  section: string,
  number: number,
  title: string,
  driveId = "",
  description?: string,
): Material {
  return { slug: `lecture-${number}`, type: "lecture", number, title, description, driveId, format: "pdf", section };
}
 
function practical(
  section: string,
  number: number,
  title: string,
  driveId = "",
  description?: string,
): Material {
  return { slug: `practical-${number}`, type: "practical", number, title, description, driveId, format: "docx", section };
}
 
// Матеріали в порядку робочої програми.
// Щоб підключити файл, впиши його ID з Google Drive четвертим аргументом:
//   lecture("algorithms", 1, "Вступ до дисципліни...", "1AbC...xyz", "опис"),
export const materials: Material[] = [
  // ── Розділ 1. Основи алгоритмізації ──
  lecture("algorithms", 1, "Вступ до дисципліни. Алгоритми і програми", "1qwbmcG34FU4uIhcyk8nt_1pIKt4-du60"),
  lecture("algorithms", 2, "Базові конструкції алгоритмів", "19Ln4Ri_yAfxVaoJt7hoLxbV4tu7s4joq"),
  lecture("algorithms", 3, "Основні керуючі структури алгоритмів", "1Evwz4AQ-Sb9l_B40CpOK4RoBdCXnoNOk"),
  lecture("algorithms", 4, "Лінійні алгоритми", "1BxkJGonTQ-txAs91eDct-nVeYHriOikn"),
  practical("algorithms", 1, "Розробка блок-схем алгоритмів лінійних обчислювальних процесів", "1ytiio86zkntHdEDtkhxb_FrLZxbvQKXR"),
  lecture("algorithms", 5, "Розгалужені алгоритми. Умовні оператори"),
  practical("algorithms", 2, "Розробка блок-схем алгоритмів розгалужених процесів"),
  lecture("algorithms", 6, "Циклічні алгоритми"),
  practical("algorithms", 3, "Розробка блок-схем алгоритмів циклічних процесів"),
 
  // ── Розділ 2. Основи програмування та мови Python ──
  lecture("python-intro", 7, "Арифметичні основи ЕОМ. Системи числення. Перевід чисел, дії над числами.", ""),
  practical("python-intro", 4, "Перевід чисел, дії в різних системах числення"),
  lecture("python-intro", 8, "Логічні основи ЕОМ. Елементи алгебри логіки"),
  practical("python-intro", 5, "Логічні вирази та таблиці істинності"),
  lecture("python-intro", 9, "Парадигми і мови програмування"),
  lecture("python-intro", 10, "Вступ до Python. Середовище розробки IDLE"),
  practical("python-intro", 6, "Інсталяція Python і перша програма"),
  lecture("python-intro", 11, "Змінні та типи даних у Python. Оператори"),
  practical("python-intro", 7, "Обчислення виразів у середовищі IDLE"),
  practical("python-intro", 8, "Програмування графічних зображень (модуль turtle)"),
 
  // ── Розділ 3. Базові можливості мови Python ──
  lecture("python-basics", 12, "Введення та виведення даних. Функція print()"),
  practical("python-basics", 9, "Консольний додаток із введенням і виведенням даних"),
  lecture("python-basics", 13, "Операції над числами в Python. Бібліотека математичних функцій"),
  practical("python-basics", 10, "Консольний додаток з використанням числових операцій"),
  lecture("python-basics", 14, "Бібліотека математичних функцій"),
  practical("python-basics", 11, "Використання математичних функцій у програмах"),
  lecture("python-basics", 15, "Умовні оператори if, elif, else"),
  practical("python-basics", 12, "Консольний додаток з умовними операторами"),
  lecture("python-basics", 16, "Принципи роботи з циклами"),
  practical("python-basics", 13, "Консольний додаток з використанням циклів"),
 
  // ── Розділ 4. Розширені можливості базових конструкцій ──
  lecture("constructs", 17, "Робота з рядками. Функція range()"),
  practical("constructs", 14, "Консольний додаток з використанням методів і функцій рядків та функції range()"),
  lecture("constructs", 18, "F-рядки в Python. Переваги та недоліки"),
  practical("constructs", 15, "Форматування рядків за допомогою F-рядків"),
  lecture("constructs", 19, "Помилки у програмах та налагодження"),
  practical("constructs", 16, "Виявлення та виправлення помилок у програмах"),
  lecture("constructs", 20, "Масиви. Списки і кортежі"),
  practical("constructs", 17, "Робота зі списками та кортежами"),
 
  // ── Розділ 5. Структуровані дані та функції ──
  lecture("data-functions", 21, "Основи роботи з двовимірними масивами"),
  practical("data-functions", 18, "Програмування з використанням двовимірних масивів"),
  lecture("data-functions", 22, "Словники в Python"),
  practical("data-functions", 19, "Консольний додаток з використанням словників"),
  lecture("data-functions", 23, "Множини в Python"),
  practical("data-functions", 20, "Застосування множин у програмах"),
  lecture("data-functions", 24, "Функції у Python. Параметри та аргументи"),
  practical("data-functions", 21, "Написання власних функцій"),
  lecture("data-functions", 25, "Рекурсія як метод програмування"),
  practical("data-functions", 22, "Прості задачі з рекурсією"),
 
  // ── Розділ 6. Робота з файлами та модулями ──
  lecture("files-modules", 26, "Робота з файлами. Відкриття, читання, запис"),
  practical("files-modules", 23, "Створення програм для збереження і читання даних з файлів"),
  lecture("files-modules", 27, "Обробка текстових файлів"),
  practical("files-modules", 24, "Аналіз текстових файлів (підрахунок слів, символів)"),
  lecture("files-modules", 28, "Модулі та пакети у Python"),
  practical("files-modules", 25, "Створення та використання власного модуля"),
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
 