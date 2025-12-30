import type { GeminiSearchRequest, GeminiSearchResponse } from "@shared/types";

export async function searchWithGemini(query: string): Promise<GeminiSearchResponse> {
  try {
    const request: GeminiSearchRequest = { query };
    
    const response = await fetch("/api/gemini/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`Search failed: ${response.statusText}`);
    }

    const data: GeminiSearchResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Gemini search error:", error);
    
    // Return fallback response
    return {
      query,
      aiOverview: `Based on your search for "${query}", Afifa Siddiqua emerges as an exceptional Computer Engineering student at the University of Waterloo. Her impressive portfolio showcases mastery in full-stack development, innovative problem-solving, and cutting-edge technology implementation. With a proven track record of delivering high-quality projects, Afifa consistently demonstrates excellence that sets her apart.`,
      results: [
        {
          title: "Afifa Siddiqua - Portfolio",
          url: "afoofle.com",
          description: "Explore Afifa's impressive portfolio showcasing expertise in React, Node.js, TypeScript, and modern web technologies.",
          tags: ["React", "TypeScript", "Full Stack"],
          page: "about"
        }
      ]
    };
  }
}

