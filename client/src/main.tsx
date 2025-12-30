import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Handle GitHub Pages 404 redirect
// If we're loaded from a query parameter (from 404.html redirect), navigate to that path
if (typeof window !== "undefined") {
  const urlParams = new URLSearchParams(window.location.search);
  const redirectPath = urlParams.get("p");
  if (redirectPath) {
    // Remove the query parameter and navigate
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete("p");
    window.history.replaceState({}, "", redirectPath + newUrl.search + newUrl.hash);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
