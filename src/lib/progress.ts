"use client";

import { useMemo, useSyncExternalStore } from "react";

const KEY = "aop-progress";
const listeners = new Set<() => void>();

// читаємо збережений рядок (JSON-масив slug-ів)
function read(): string {
  try {
    return localStorage.getItem(KEY) ?? "[]";
  } catch {
    return "[]"; // приватний режим / заблоковане сховище
  }
}

function write(slugs: string[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(slugs));
  } catch {
    // ігноруємо: прогрес просто не збережеться
  }
  listeners.forEach((l) => l()); // повідомляємо всі компоненти
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback); // зміни з інших вкладок
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

export function useProgress() {
  // на сервері (під час збірки) прогрес завжди порожній
  const raw = useSyncExternalStore(subscribe, read, () => "[]");

  const done = useMemo(() => {
    try {
      return new Set<string>(JSON.parse(raw));
    } catch {
      return new Set<string>();
    }
  }, [raw]);

  const toggle = (slug: string) => {
    const next = new Set(done);
    if (next.has(slug)) next.delete(slug);
    else next.add(slug);
    write([...next]);
  };

  return { done, toggle };
}