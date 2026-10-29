import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  materials,
  getMaterialBySlug,
  typeLabels,
  previewUrl,
  downloadUrl,
} from "@/data/materials";
import styles from "./page.module.css";
import DoneButton from "@/components/DoneButton/DoneButton";

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

  // сусіди за порядком робочої програми
  const index = materials.findIndex((m) => m.slug === slug);
  const prev = materials[index - 1];
  const next = materials[index + 1];

  return (
    <article>
      <p className={styles.label}>
        {typeLabels[material.type]} {material.number}
      </p>
      <h1 className={styles.title}>{material.title}</h1>
      {material.description && (
        <p className={styles.description}>{material.description}</p>
      )}

      <div className={styles.actions}>
        <a href={downloadUrl(material.driveId)} className={styles.download}>
          Завантажити ({material.format.toUpperCase()})
        </a>
        <a
          href={`https://drive.google.com/file/d/${material.driveId}/view`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondary}
        >
          Відкрити в Google Drive
        </a>
        <DoneButton slug={material.slug} />
      </div>

      <div className={styles.viewer}>
        <iframe
          src={previewUrl(material.driveId)}
          title={material.title}
          allow="autoplay"
        />
      </div>

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
