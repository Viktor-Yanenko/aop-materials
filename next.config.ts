import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // збірка в статичні HTML-файли (папка out/)
  trailingSlash: true,       // /lectures/ → lectures/index.html, зручно для хостингу
  images: { unoptimized: true }, // next/image без сервера
};

export default nextConfig;