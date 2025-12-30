// Gemini Search API Types

export interface GeminiSearchRequest {
  query: string;
}

export interface GeminiSearchResponse {
  aiOverview: string;
  results: SearchResult[];
  query: string;
}

export interface SearchResult {
  title: string;
  url: string;
  description: string;
  tags: string[];
  page: 'about' | 'projects' | 'experience' | 'contact';
  icon?: React.ReactNode;
  image?: string;
}

