/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-dim": "#d9dadb",
        "surface-tint": "#0054d6",
        "error-container": "#ffdad6",
        "on-tertiary-fixed-variant": "#474646",
        "on-secondary": "#ffffff",
        "on-error": "#ffffff",
        "on-background": "#191c1d",
        "on-primary-fixed-variant": "#003fa4",
        "on-primary-fixed": "#001849",
        "surface-bright": "#f8f9fa",
        "on-tertiary-fixed": "#1c1b1b",
        "tertiary-fixed": "#e5e2e1",
        "tertiary": "#5a5959",
        "on-surface-variant": "#424656",
        "on-surface": "#191c1d",
        "surface-container": "#edeeef",
        "on-tertiary-container": "#faf7f6",
        "on-tertiary": "#ffffff",
        "primary-fixed": "#dae1ff",
        "on-secondary-fixed": "#171c22",
        "tertiary-container": "#737171",
        "secondary-fixed-dim": "#c2c7ce",
        "inverse-surface": "#2e3132",
        "background": "#f8f9fa",
        "surface-container-low": "#f3f4f5",
        "surface": "#f8f9fa",
        "on-primary": "#ffffff",
        "inverse-on-surface": "#f0f1f2",
        "secondary": "#5a5f65",
        "primary-container": "#0066ff",
        "on-primary-container": "#f8f7ff",
        "primary": "#0050cb",
        "on-secondary-fixed-variant": "#42474d",
        "error": "#ba1a1a",
        "outline-variant": "#c2c6d8",
        "primary-fixed-dim": "#b3c5ff",
        "on-error-container": "#93000a",
        "inverse-primary": "#b3c5ff",
        "outline": "#727687",
        "on-secondary-container": "#5e636a",
        "secondary-container": "#dce0e8",
        "tertiary-fixed-dim": "#c8c6c5",
        "secondary-fixed": "#dee3ea",
        "surface-variant": "#e1e3e4",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e7e8e9",
        "surface-container-highest": "#e1e3e4"
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
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}
