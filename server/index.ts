import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { generateSearchOverview } from "./gemini";
import type { GeminiSearchRequest, GeminiSearchResponse } from "../shared/types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Parse JSON bodies
  app.use(express.json());

  // API Routes
  app.post("/api/gemini/search", async (req, res) => {
    try {
      const { query } = req.body as GeminiSearchRequest;
      
      if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Query parameter is required" });
      }

      const { aiOverview, results } = await generateSearchOverview(query);
      
      const response: GeminiSearchResponse = {
        aiOverview,
        results,
        query
      };
      
      res.json(response);
    } catch (error) {
      console.error("Search API Error:", error);
      res.status(500).json({ error: "Failed to generate search results" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
