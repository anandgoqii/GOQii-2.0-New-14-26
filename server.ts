import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const BASE_URL = "https://go-qii-2-0-new-14-26.vercel.app";

  // Robots.txt
  app.get("/robots.txt", (req, res) => {
    res.set("Content-Type", "text/plain");
    res.send(`User-agent: *
Allow: /

Sitemap: https://go-qii-2-0-new-14-26.vercel.app/sitemap.xml`);
  });

  // Sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    const routes = [
      "",
      "/about",
      "/for-business",
      "/for-you",
      "/trust-center",
      "/contact",
      "/careers",
      "/investors",
      "/longevity-journey",
      "/privacy",
      "/terms",
    ];

    const urls = routes
      .map(
        (route) => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === "" ? "1.0" : "0.8"}</priority>
    </url>`
      )
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

    res.set("Content-Type", "application/xml");
    res.send(xml);
  });

  // llms.txt
  app.get("/llms.txt", (req, res) => {
    res.set("Content-Type", "text/plain");
    res.send(`User-agent: *
Allow: /`);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
