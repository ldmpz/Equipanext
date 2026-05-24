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
        "surface-dim": "#15181f",
        "surface-tint": "#0066ff",
        "error-container": "#7f1d1d",
        "on-tertiary-fixed-variant": "#9ca3af",
        "on-secondary": "#ffffff",
        "on-error": "#ffffff",
        "on-background": "#f3f4f6",
        "on-primary-fixed-variant": "#3385ff",
        "on-primary-fixed": "#001849",
        "surface-bright": "#1a1d24",
        "on-tertiary-fixed": "#f3f4f6",
        "tertiary-fixed": "#2a2d33",
        "tertiary": "#3b3f46",
        "on-surface-variant": "#9ca3af",
        "on-surface": "#f3f4f6",
        "surface-container": "#15181f",
        "on-tertiary-container": "#faf7f6",
        "on-tertiary": "#ffffff",
        "primary-fixed": "#dae1ff",
        "on-secondary-fixed": "#dee3ea",
        "tertiary-container": "#2a2d33",
        "secondary-fixed-dim": "#9ca3af",
        "inverse-surface": "#ffffff",
        "background": "#08090b",
        "surface-container-low": "#0b0c10",
        "surface": "#0f1115",
        "on-primary": "#ffffff",
        "inverse-on-surface": "#08090b",
        "secondary": "#5a5f65",
        "primary-container": "#003fa4",
        "on-primary-container": "#f8f7ff",
        "primary": "#0066ff",
        "on-secondary-fixed-variant": "#9ca3af",
        "error": "#ef4444",
        "outline-variant": "#1f2937",
        "primary-fixed-dim": "#0066ff",
        "on-error-container": "#fca5a5",
        "inverse-primary": "#0066ff",
        "outline": "#4b5563",
        "on-secondary-container": "#f3f4f6",
        "secondary-container": "#1e232b",
        "tertiary-fixed-dim": "#3b3f46",
        "secondary-fixed": "#1e232b",
        "surface-variant": "#1a1d24",
        "surface-container-lowest": "#050608",
        "surface-container-high": "#1c1f28",
        "surface-container-highest": "#242936"
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
