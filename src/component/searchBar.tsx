import React, { useState, useEffect } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    removeHighlights(); // clear old highlights
    if (query.trim()) {
      highlightMatches(query);
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-6">
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
function removeHighlights() {
  const highlights = document.querySelectorAll("mark[data-highlight]");
  highlights.forEach((mark) => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize(); // Merge adjacent text nodes
  });
}

// ✨ Highlight & scroll to first match
function highlightMatches(query) {
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let firstMatchNode = null;

  while (walk.nextNode()) {
    const node = walk.currentNode;

    // skip script/style/input/mark
    if (
      node.parentNode.tagName === "SCRIPT" ||
      node.parentNode.tagName === "STYLE" ||
      node.parentNode.closest("mark[data-highlight]") ||
      node.parentNode.tagName === "INPUT"
    )
      continue;

    const text = node.nodeValue;
    const index = text.toLowerCase().indexOf(query.toLowerCase());

    if (index !== -1) {
      const matchedText = text.substring(index, index + query.length);
      const before = document.createTextNode(text.substring(0, index));
      const match = document.createElement("mark");
      match.textContent = matchedText;
      match.setAttribute("data-highlight", "true");
      match.className = "bg-yellow-300 text-black px-1 rounded";

      const after = document.createTextNode(text.substring(index + query.length));

      const parent = node.parentNode;
      parent.replaceChild(after, node);
      parent.insertBefore(match, after);
      parent.insertBefore(before, match);

      // Save the first match to scroll
      if (!firstMatchNode) {
        firstMatchNode = match;
      }
    }
  }

  // 🚀 Scroll to first match
  if (firstMatchNode) {
    firstMatchNode.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}