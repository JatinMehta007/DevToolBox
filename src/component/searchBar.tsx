import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
export const SearchBar = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    removeHighlights(); // clear old highlights
    if (query.trim()) {
      highlightMatches(query);
    }
  }, [query]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full  lg:hidden px-10">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search anything..."
        className="w-full px-4 py-2 border-2 rounded-2xl bg-neutral-800 text-white border-x-2 border-double border-blue-300"
      />
    </div>
  );
};

// ✂️ Clear all old highlights
function removeHighlights(): void {
  const highlights = document.querySelectorAll("mark[data-highlight]");
  highlights.forEach((mark) => {
    const parent = mark.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(mark.textContent ?? ""), mark);
      parent.normalize(); // Merge adjacent text nodes
    }
  });
}

// ✨ Highlight & scroll to first match
function highlightMatches(query: string): void {
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  let firstMatchNode: HTMLElement | null = null;

  while (walk.nextNode()) {
    const node = walk.currentNode as Text;
    const parent = node.parentNode as HTMLElement | null;

    if (
      !parent ||
      parent.tagName === "SCRIPT" ||
      parent.tagName === "STYLE" ||
      parent.closest("mark[data-highlight]") ||
      parent.tagName === "INPUT"
    ) {
      continue;
    }

    const text = node.nodeValue;
    if (!text) continue;

    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index !== -1) {
      const matchedText = text.substring(index, index + query.length);
      const before = document.createTextNode(text.substring(0, index));
      const match = document.createElement("mark");
      match.textContent = matchedText;
      match.setAttribute("data-highlight", "true");
      match.className = "bg-yellow-300 text-black px-1 rounded";

      const after = document.createTextNode(text.substring(index + query.length));

      parent.replaceChild(after, node);
      parent.insertBefore(match, after);
      parent.insertBefore(before, match);

      if (!firstMatchNode) {
        firstMatchNode = match;
      }
    }
  }

  if (firstMatchNode) {
    firstMatchNode.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}