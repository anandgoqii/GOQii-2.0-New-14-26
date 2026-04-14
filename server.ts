import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Robots.txt
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send("User-agent: *\nAllow: /\nSitemap: https://goqii.com/sitemap.xml");
  });

  // Sitemap.xml (Static for now)
  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://goqii.com/</loc><priority>1.0</priority></url>
  <url><loc>https://goqii.com/about</loc><priority>0.8</priority></url>
  <url><loc>https://goqii.com/contact</loc><priority>0.8</priority></url>
  <url><loc>https://goqii.com/for-business</loc><priority>0.9</priority></url>
  <url><loc>https://goqii.com/trust-center</loc><priority>0.7</priority></url>
</urlset>`);
  });

  // llms.txt
  app.get("/llms.txt", (req, res) => {
    res.type("text/plain");
    res.send("GOQii Preventive Health Intelligence Platform. AI-powered longevity and healthspan optimization.");
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
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
