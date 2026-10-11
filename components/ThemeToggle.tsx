"use client";

/**
 * No React state: the current theme is the `data-theme` attribute, and CSS
 * decides which icon shows. That means no hydration mismatch and no flicker
 * for someone who has chosen light mode.
 */
export default function ThemeToggle() {
  const flip = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode — the choice just will not persist */
    }
  };

  return (
    <button
      type="button"
      onClick={flip}
      className="btn px-3"
      aria-label="Switch between light and dark mode"
      title="Switch between light and dark mode"
    >
      <span aria-hidden className="theme-icon-dark">
        ☾
      </span>
      <span aria-hidden className="theme-icon-light">
        ☀
      </span>
    </button>
  );
}
