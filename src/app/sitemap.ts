import type { MetadataRoute } from "next";

const BASE_URL = "https://www.devxperience.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/leituras", "/ux", "/usabilidade", "/acessibilidade"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}


