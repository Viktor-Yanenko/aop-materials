import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  materials,
  getMaterialBySlug,
  getSection,
  typeLabels,
} from "@/data/materials";
import styles from "./page.module.css";
import DoneButton from "@/components/DoneButton/DoneButton";
import MaterialViewer, {
  type ViewerFile,
} from "@/components/MaterialViewer/MaterialViewer";

export const dynamicParams = false;

export function generateStaticParams() {
  return materials.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/materials/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const m = getMaterialBySlug(slug);
  return { title: m ? `${m.title} | АОП` : "АОП" };
}

export default async function MaterialPage({
  params,
}: PageProps<"/materials/[slug]">) {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);
  if (!material) notFound();
  const section = getSection(material.section);
  // які файли є в цього матеріалу
  const files: ViewerFile[] = [];
  if (material.driveId) {
    files.push({
      label: material.type === "lecture" ? "Конспект" : "Завдання",
      id: material.driveId,
      format: material.format,
    });
  }
  if (material.slidesId) {
    files.push({ label: "Презентація", id: material.slidesId, format: "pptx" });
  }

  // сусіди за порядком робочої програми
  const index = materials.findIndex((m) => m.slug === slug);
  const prev = materials[index - 1];
  const next = materials[index + 1];

  return (
    <article>
      <p className={styles.label}>
        {section && `Розділ ${section.number} · `}
        {typeLabels[material.type]} {material.number}
      </p>
      <h1 className={styles.title}>{material.title}</h1>
      {material.description && (
        <p className={styles.description}>{material.description}</p>
      )}

      {files.length > 0 ? (
        <MaterialViewer files={files}>
          <DoneButton slug={material.slug} />
        </MaterialViewer>
      ) : (
        <div className={styles.empty}>
          <p>Матеріал ще не додано.</p>
          <span>Зазирніть сюди трохи згодом.</span>
        </div>
      )}

      <nav className={styles.pager}>
        {prev ? (
          <Link href={`/materials/${prev.slug}`} className={styles.pagerLink}>
            <span>← Попередній</span>
            {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/materials/${next.slug}`}
            className={`${styles.pagerLink} ${styles.pagerNext}`}
          >
            <span>Наступний →</span>
            {next.title}
          </Link>
        )}
      </nav>
    </article>
  );
}
