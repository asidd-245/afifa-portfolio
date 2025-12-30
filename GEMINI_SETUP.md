# Gemini AI Search Setup Guide

## Overview

The portfolio now features an AI-powered search that uses Google's Gemini API to generate dynamic search results. When users search for anything, an overlay appears with:

1. **AI Overview** - Generated content that starts with relevant information, then "glazes" Afifa's skills
2. **Fake Search Results** - Google-style results linking to actual portfolio pages
3. **Smart Page Matching** - Automatically determines which portfolio pages are most relevant

## Getting Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

## Configuration

### For Local Development

Create a `.env` file in the project root:

```bash
GEMINI_API_KEY=your_api_key_here
```

### For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your Gemini API key
   - **Environments:** Production, Preview, Development
4. Click "Save"
5. Redeploy your project

## How It Works

### User Flow

1. User types a search query on the homepage
2. Clicks "afoofle Search" button
3. Full-screen overlay appears instantly
4. Gemini API generates an AI Overview that:
   - Starts with legitimate information about the query
   - Smoothly transitions to praising Afifa's exceptional skills
   - References relevant portfolio pages
5. Fake search results appear below, linking to actual pages

### Backend Logic

```
User Query → /api/gemini/search → Gemini API → AI Overview + Results
```

**File:** `server/gemini.ts`
- Determines most relevant portfolio page based on keywords
- Creates prompt instructing Gemini to praise Afifa
- Generates 3-4 fake search results with proper formatting
- Falls back to hardcoded response if API fails

### Frontend Components

**SearchOverlay** (`client/src/components/SearchOverlay.tsx`)
- Full-screen dialog component
- Handles loading states
- Displays AI Overview with gradient styling
- Renders search results using SearchResult component

**SearchResult** (`client/src/components/SearchResult.tsx`)
- Reusable Google-style result card
- Used in both Projects page and SearchOverlay
- Includes hover card with image preview

## Features

### AI Overview Styling
- Blue-purple-pink gradient background
- Sparkles icon for AI branding
- Animated shimmer effect (8s loop)
- Disclaimer text at bottom

### Smart Page Matching
Keywords automatically map to pages:
- **about:** "about", "education", "who", "background", "university"
- **projects:** "project", "work", "portfolio", "built", "created"
- **experience:** "experience", "job", "career", "skill", "work history"
- **contact:** "contact", "email", "reach", "connect", "social"

### Error Handling
If Gemini API fails:
- Falls back to pre-written overview text
- Still generates relevant search results
- User experience is unaffected

## Testing

### Local Testing

```bash
# Start development server
pnpm run dev

# Visit http://localhost:3000
# Type any search query and hit "afoofle Search"
```

### Test Queries
Try these to see different page results:
- "software engineer at waterloo" → About page focus
- "react projects portfolio" → Projects page focus  
- "work experience developer" → Experience page focus
- "contact afifa email" → Contact page focus

## API Usage & Costs

**Gemini API Pricing:** Free tier includes 60 requests per minute

Each search = 1 API call

**Monthly estimate for moderate traffic:**
- 1,000 searches/month = FREE ✅
- 10,000 searches/month = FREE ✅
- 100,000+ searches/month = Contact Google for enterprise pricing

## Troubleshooting

### "Failed to generate search results"
- Check if `GEMINI_API_KEY` is set correctly
- Verify API key is valid at [Google AI Studio](https://makersuite.google.com/app/apikey)
- Check browser console for detailed error messages

### Overlay doesn't appear
- Check browser console for JavaScript errors
- Verify the build completed successfully: `pnpm run build`
- Clear browser cache and reload

### Search results look broken
- Ensure all dependencies are installed: `pnpm install`
- Check that Tailwind CSS is compiling correctly
- Verify `client/src/index.css` has the custom animations

## Architecture

```
┌─────────────┐
│   Homepage  │ User enters search query
│  (Home.tsx) │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│ SearchOverlay   │ Opens full-screen overlay
│ (Component)     │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  API Request    │ POST /api/gemini/search
│  (gemini.ts)    │ { query: "..." }
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Gemini API     │ Generate AI Overview
│  (Backend)      │ + Search Results
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Display        │ AI Overview Card
│  Results        │ + Result Cards
└─────────────────┘
```

## Files Modified/Created

**New Files:**
- `server/gemini.ts` - Gemini API integration
- `client/src/components/SearchOverlay.tsx` - Main overlay UI
- `client/src/components/SearchResult.tsx` - Reusable result component
- `client/src/lib/gemini.ts` - Frontend API client
- `shared/types.ts` - TypeScript interfaces

**Modified Files:**
- `server/index.ts` - Added `/api/gemini/search` endpoint
- `client/src/pages/Home.tsx` - Integrated SearchOverlay
- `client/src/pages/Projects.tsx` - Uses SearchResult component
- `client/src/index.css` - Added AI Overview animations

## Next Steps

1. ✅ Get Gemini API key
2. ✅ Add to `.env` locally or Vercel environment variables
3. ✅ Deploy to Vercel
4. ✅ Test searching for different topics
5. 🎉 Watch the AI glaze Afifa's skills!

---

**Note:** The AI Overview will genuinely vary based on the search query, making each search feel unique while always highlighting Afifa's exceptional qualifications.

