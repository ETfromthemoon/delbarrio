"use client";

import { useState } from "react";
import type { MenuItem } from "@/lib/site";

type MenuExplorerProps = {
  categories: string[];
  items: MenuItem[];
};

export function MenuExplorer({ categories, items }: MenuExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  const visibleItems = selectedCategory === "Todo" ? items : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="menu-explorer">
      <div className="menu-filters" role="tablist" aria-label="Filtrar carta por categoría">
        {["Todo", ...categories].map((category) => (
          <button
            className={selectedCategory === category ? "is-active" : ""}
            key={category}
            onClick={() => setSelectedCategory(category)}
            role="tab"
            aria-selected={selectedCategory === category}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-full-grid" role="tabpanel">
        {visibleItems.map((item) => (
          <article className="menu-full-card" key={`${item.category}-${item.name}`}>
            <p>{item.category}</p>
            <div><h3>{item.name}</h3><strong>{item.price}</strong></div>
            {item.description && <span>{item.description}</span>}
          </article>
        ))}
      </div>
    </div>
  );
}
