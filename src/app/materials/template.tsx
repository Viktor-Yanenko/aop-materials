import type { ReactNode } from "react";

export default function MaterialTemplate({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="fade-in">{children}</div>;
}
