import { SITE } from "@/config/site";

export default function sitemap() {
  const base = SITE.url;

  const routes = [
    "",
    "/cases",
    "/cases/prism",
    "/cases/cliniguard",
    "/cases/hologuide",
    "/cases/aris",
    "/about",
    "/connect",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
