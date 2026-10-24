'use client';

import { useEffect, useState } from 'react';

type Item = { id: string; label: string; level: 2 | 3 };

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'section';
}

/**
 * Sticky article ToC that works on both blog and research pages.
 * It assigns stable ids to H2/H3 headings inside the supplied scope.
 */
export function StickyArticleToc({ scope, desktop = true }: { scope: string; desktop?: boolean }) {
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(scope);
    if (!root) return;
    const headings = Array.from(root.querySelectorAll<HTMLHeadingElement>('h2, h3'));
    const used = new Set<string>();
    const next = headings.map((heading) => {
      const base = heading.id || slugify(heading.textContent || 'section');
      let id = base;
      let count = 2;
      while (used.has(id)) id = `${base}-${count++}`;
      used.add(id);
      heading.id = id;
      return { id, label: heading.textContent?.trim() || 'Section', level: heading.tagName === 'H3' ? 3 : 2 } as Item;
    });
    setItems(next);
    setActive(next[0]?.id || '');
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) setActive(visible[0].target.id);
    }, { rootMargin: '-96px 0px -66% 0px' });
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [scope]);

  if (!items.length) return null;

  const links = (
    <ol>
      {items.map((item) => (
        <li className={`toc-level-${item.level}`} key={item.id}>
          <a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <div className="hat-toc">
      <details className="hat-toc-mobile">
        <summary>On this page</summary>
        {links}
      </details>
      {desktop ? (
        <nav className="hat-toc-desktop" aria-label="On this page">
          <strong>On this page</strong>
          {links}
        </nav>
      ) : null}
    </div>
  );
}
