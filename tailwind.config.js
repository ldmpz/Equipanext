import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-dim": "#f3f4f6",
        "surface-tint": "#0055ff",
        "error-container": "#fca5a5",
        "on-tertiary-fixed-variant": "#4b5563",
        "on-secondary": "#ffffff",
        "on-error": "#ffffff",
        "on-background": "#111827",
        "on-primary-fixed-variant": "#0044cc",
        "on-primary-fixed": "#e0e7ff",
        "surface-bright": "#ffffff",
        "on-tertiary-fixed": "#111827",
        "tertiary-fixed": "#e5e7eb",
        "tertiary": "#6b7280",
        "on-surface-variant": "#4b5563",
        "on-surface": "#1f2937",
        "surface-container": "#f9fafb",
        "on-tertiary-container": "#111827",
        "on-tertiary": "#ffffff",
        "primary-fixed": "#dbeafe",
        "on-secondary-fixed": "#111827",
        "tertiary-container": "#f3f4f6",
        "secondary-fixed-dim": "#4b5563",
        "inverse-surface": "#111827",
        "background": "#ffffff",
        "surface-container-low": "#ffffff",
        "surface": "#ffffff",
        "on-primary": "#ffffff",
        "inverse-on-surface": "#f9fafb",
        "secondary": "#4b5563",
        "primary-container": "#ebf0ff",
        "on-primary-container": "#0044cc",
        "primary": "#0055ff",
        "on-secondary-fixed-variant": "#374151",
        "error": "#ef4444",
        "outline-variant": "#e5e7eb",
        "primary-fixed-dim": "#0055ff",
        "on-error-container": "#7f1d1d",
        "inverse-primary": "#dbeafe",
        "outline": "#d1d5db",
        "on-secondary-container": "#111827",
        "secondary-container": "#f3f4f6",
        "tertiary-fixed-dim": "#9ca3af",
        "secondary-fixed": "#e5e7eb",
        "surface-variant": "#f3f4f6",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#f3f4f6",
        "surface-container-highest": "#e5e7eb"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "margin-mobile": "16px",
        "gutter": "24px",
        "margin-desktop": "64px",
        "base": "8px",
        "container-max": "1440px"
      },
      fontFamily: {
        "label-caps": ["Inter", "sans-serif"],
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "mono-label": ["JetBrains Mono", "monospace"],
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "headline-lg": ["Hanken Grotesk", "sans-serif"],
        "display": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "mono-label": ["13px", { lineHeight: "1", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-lg": ["40px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }]
      }
    }
  },
  plugins: [
    forms,
    containerQueries
  ]
}
