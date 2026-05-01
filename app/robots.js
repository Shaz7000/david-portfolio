export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin", "/expert", "/login", "/dashboard"],
      },
    ],
    sitemap: "https://davidmathewthomas.com/sitemap.xml",
  };
}
