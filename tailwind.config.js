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
        "surface-dim": "#04142B",
        "surface-tint": "#FFC107",
        "error-container": "#7f1d1d",
        "on-tertiary-fixed-variant": "#D9D9D9",
        "on-secondary": "#04142B",
        "on-error": "#ffffff",
        "on-background": "#FFFFFF",
        "on-primary-fixed-variant": "#FFB300",
        "on-primary-fixed": "#04142B",
        "surface-bright": "#082041",
        "on-tertiary-fixed": "#FFFFFF",
        "tertiary-fixed": "#061A36",
        "tertiary": "#D9D9D9",
        "on-surface-variant": "#D9D9D9",
        "on-surface": "#FFFFFF",
        "surface-container": "#061A36",
        "on-tertiary-container": "#FFFFFF",
        "on-tertiary": "#04142B",
        "primary-fixed": "#FFC107",
        "on-secondary-fixed": "#04142B",
        "tertiary-container": "#082041",
        "secondary-fixed-dim": "#FFB300",
        "inverse-surface": "#FFFFFF",
        "background": "#04142B",
        "surface-container-low": "#04142B",
        "surface": "#082041",
        "on-primary": "#04142B",
        "inverse-on-surface": "#04142B",
        "secondary": "#FFB300",
        "primary-container": "rgba(255, 193, 7, 0.1)",
        "on-primary-container": "#FFC107",
        "primary": "#FFC107",
        "on-secondary-fixed-variant": "#FFB300",
        "error": "#ef4444",
        "outline-variant": "rgba(255, 193, 7, 0.15)",
        "primary-fixed-dim": "#FFC107",
        "on-error-container": "#fca5a5",
        "inverse-primary": "#FFC107",
        "outline": "rgba(255, 193, 7, 0.3)",
        "on-secondary-container": "#FFFFFF",
        "secondary-container": "#061A36",
        "tertiary-fixed-dim": "#D9D9D9",
        "secondary-fixed": "#FFB300",
        "surface-variant": "#061A36",
        "surface-container-lowest": "#04142B",
        "surface-container-high": "#082041",
        "surface-container-highest": "#082041"
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
