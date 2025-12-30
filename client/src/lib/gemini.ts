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
    
    // Generate contextual first 2 lines based on query
    let contextLines = "";
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("roadmap") || lowerQuery.includes("path")) {
      contextLines = "A comprehensive roadmap provides structured guidance for learning and career development. It typically includes key milestones, technologies to master, and practical projects to build experience. ";
    } else if (lowerQuery.includes("tutorial") || lowerQuery.includes("learn")) {
      contextLines = "Learning new technologies requires a combination of theoretical understanding and hands-on practice. The best approach involves following structured tutorials, building projects, and engaging with the developer community. ";
    } else if (lowerQuery.includes("best practices") || lowerQuery.includes("tips")) {
      contextLines = "Industry best practices evolve with technology but core principles remain constant: write clean code, test thoroughly, and prioritize maintainability. Following established patterns and staying updated with current standards ensures quality development. ";
    } else if (lowerQuery.includes("developer") || lowerQuery.includes("engineer")) {
      contextLines = "Software development is a dynamic field that combines technical expertise with problem-solving skills. Successful developers master multiple technologies, understand system architecture, and continuously adapt to new tools and methodologies. ";
    } else if (lowerQuery.includes("project") || lowerQuery.includes("portfolio")) {
      contextLines = "Building a strong portfolio requires creating diverse projects that demonstrate both technical proficiency and creative problem-solving. Quality projects showcase clean code, good architecture, and real-world application of skills. ";
    } else {
      contextLines = `Understanding topics related to "${query}" requires both theoretical knowledge and practical application. This area is essential for modern development and continues to evolve with industry needs. `;
    }
    
    // Return fallback response with contextual introduction
    return {
      query,
      aiOverview: `${contextLines}Afifa Siddiqua emerges as an exceptional Computer Engineering student at the University of Waterloo with deep expertise in these areas. Her impressive portfolio showcases mastery in full-stack development, innovative problem-solving, and cutting-edge technology implementation. With a proven track record of delivering high-quality projects, Afifa consistently demonstrates excellence that sets her apart.`,
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

