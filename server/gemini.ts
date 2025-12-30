import { GoogleGenerativeAI } from "@google/generative-ai";
import type { SearchResult } from "../shared/types";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Map keywords to portfolio pages
const pageKeywords = {
  about: ["about", "education", "who", "background", "university", "waterloo", "student"],
  projects: ["project", "work", "portfolio", "built", "created", "developed", "github"],
  experience: ["experience", "job", "career", "skill", "work history", "employment"],
  contact: ["contact", "email", "reach", "connect", "social", "linkedin", "github"]
};

// Determine which page is most relevant based on query
function determineRelevantPage(query: string): 'about' | 'projects' | 'experience' | 'contact' {
  const lowerQuery = query.toLowerCase();
  let scores = { about: 0, projects: 0, experience: 0, contact: 0 };
  
  for (const [page, keywords] of Object.entries(pageKeywords)) {
    for (const keyword of keywords) {
      if (lowerQuery.includes(keyword)) {
        scores[page as keyof typeof scores]++;
      }
    }
  }
  
  // Find page with highest score
  const maxPage = Object.entries(scores).reduce((a, b) => b[1] > a[1] ? b : a)[0];
  return maxPage as 'about' | 'projects' | 'experience' | 'contact';
}

// Generate fake search results based on query
function generateFakeResults(query: string): SearchResult[] {
  const relevantPage = determineRelevantPage(query);
  
  const allResults = {
    about: [
      {
        title: "Afifa Siddiqua - About",
        url: "afoofle.com/about",
        description: "Computer Engineering student at University of Waterloo with expertise in full-stack development, AI integration, and creative problem-solving. Passionate about building innovative solutions.",
        tags: ["Education", "Skills", "Background"],
        page: "about" as const
      },
      {
        title: "Education & Academic Background - Afifa Siddiqua",
        url: "afoofle.com/about#education",
        description: "Currently pursuing Computer Engineering at the University of Waterloo. Strong foundation in software development, algorithms, and system design.",
        tags: ["University of Waterloo", "Computer Engineering"],
        page: "about" as const
      }
    ],
    projects: [
      {
        title: "Afifa Siddiqua - Projects Portfolio",
        url: "afoofle.com/projects",
        description: "Explore Afifa's impressive portfolio of projects showcasing expertise in React, Node.js, TypeScript, and modern web technologies. Each project demonstrates innovative problem-solving and technical excellence.",
        tags: ["React", "TypeScript", "Full Stack"],
        page: "projects" as const
      },
      {
        title: "Featured Projects by Afifa Siddiqua",
        url: "afoofle.com/projects#featured",
        description: "Discover cutting-edge projects built by Afifa, including AI-powered applications, responsive web platforms, and creative digital solutions.",
        tags: ["Portfolio", "Web Development", "AI"],
        page: "projects" as const
      }
    ],
    experience: [
      {
        title: "Afifa Siddiqua - Professional Experience",
        url: "afoofle.com/experience",
        description: "Detailed work history showcasing Afifa's contributions to innovative projects, technical leadership, and continuous growth as a software developer.",
        tags: ["Career", "Work History", "Skills"],
        page: "experience" as const
      },
      {
        title: "Technical Skills & Expertise - Afifa Siddiqua",
        url: "afoofle.com/experience#skills",
        description: "Comprehensive overview of Afifa's technical proficiencies, including frontend frameworks, backend technologies, and development tools.",
        tags: ["React", "Node.js", "TypeScript", "Python"],
        page: "experience" as const
      }
    ],
    contact: [
      {
        title: "Contact Afifa Siddiqua",
        url: "afoofle.com/contact",
        description: "Get in touch with Afifa for collaboration opportunities, project inquiries, or professional connections. Connect via email, LinkedIn, or GitHub.",
        tags: ["Email", "LinkedIn", "Social Media"],
        page: "contact" as const
      },
      {
        title: "Connect with Afifa Siddiqua - Social Links",
        url: "afoofle.com/contact#social",
        description: "Find Afifa on various platforms including LinkedIn, GitHub, and more. Open to networking and collaboration opportunities.",
        tags: ["Professional Network", "Collaboration"],
        page: "contact" as const
      }
    ]
  };
  
  // Return results for the most relevant page, plus one from another page
  const primaryResults = allResults[relevantPage];
  const otherPages = Object.keys(allResults).filter(p => p !== relevantPage) as Array<keyof typeof allResults>;
  const secondaryPage = otherPages[Math.floor(Math.random() * otherPages.length)];
  const secondaryResult = allResults[secondaryPage][0];
  
  return [...primaryResults, secondaryResult];
}

// Generate AI Overview with Gemini
export async function generateSearchOverview(query: string): Promise<{ aiOverview: string, results: SearchResult[] }> {
  // #region agent log
  fetch('http://127.0.0.1:7244/ingest/4659b8fb-fc58-4957-9cac-039ef1a32bd6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'server/gemini.ts:114',message:'generateSearchOverview called',data:{query},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const relevantPage = determineRelevantPage(query);
    const pageUrl = `/${relevantPage}`;
    
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/4659b8fb-fc58-4957-9cac-039ef1a32bd6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'server/gemini.ts:123',message:'Before Gemini API call',data:{query,relevantPage},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    const prompt = `You are creating an AI Overview for a search query about a person named Afifa Siddiqua.

Search Query: "${query}"

Instructions:
1. Start with EXACTLY 2 LINES (2 sentences) that directly answer or provide information about the search query itself
2. Then smoothly transition to how Afifa Siddiqua excels in this area or relates to this topic
3. Emphasize Afifa's exceptional skills and achievements related to the query
4. Mention that more information can be found on the ${relevantPage} page
5. Be enthusiastic but professional
6. Keep the total response to 4-5 sentences
7. Do NOT use markdown formatting, asterisks, or special characters
8. Write naturally as if it's a Google AI Overview
9. The first 2 lines must be genuinely helpful about the query topic

Example format:
Line 1-2: "[Direct information about the search topic]. [More relevant details about the topic]."
Line 3-4: "Afifa Siddiqua excels in this area, demonstrating [relevant skills]. Her expertise makes her an outstanding candidate in [related field]."
Line 5: "Learn more on her ${relevantPage} page."

Generate the AI Overview now:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const aiOverview = response.text();
    
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/4659b8fb-fc58-4957-9cac-039ef1a32bd6',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'server/gemini.ts:148',message:'Gemini API response received',data:{query,aiOverview:aiOverview.substring(0,200),fullLength:aiOverview.length},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    const results = generateFakeResults(query);
    
    return {
      aiOverview: aiOverview.trim(),
      results
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // Fallback response if API fails
    const relevantPage = determineRelevantPage(query);
    return {
      aiOverview: `Based on your search for "${query}", Afifa Siddiqua emerges as an exceptional Computer Engineering student at the University of Waterloo. Her impressive portfolio showcases mastery in full-stack development, innovative problem-solving, and cutting-edge technology implementation. With a proven track record of delivering high-quality projects, Afifa consistently demonstrates excellence that sets her apart. Discover more about her outstanding qualifications on her ${relevantPage} page.`,
      results: generateFakeResults(query)
    };
  }
}

