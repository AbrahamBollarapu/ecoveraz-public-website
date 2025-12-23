import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          900: "var(--evz-bg-900)",
          850: "var(--evz-bg-850)",
          800: "var(--evz-bg-800)",
          750: "var(--evz-bg-750)",
        },
        border: {
          700: "var(--evz-border-700)",
          650: "var(--evz-border-650)",
        },
        text: {
          100: "var(--evz-text-100)",
          200: "var(--evz-text-200)",
          300: "var(--evz-text-300)",
          400: "var(--evz-text-400)",
        },
        accent: {
          500: "var(--evz-accent-500)",
          400: "var(--evz-accent-400)",
          600: "var(--evz-accent-600)",
        },
        status: {
          green: "var(--evz-status-green)",
          amber: "var(--evz-status-amber)",
          red: "var(--evz-status-red)",
          neutral: "var(--evz-status-neutral)",
        },
        chart: {
          grid: "var(--evz-chart-grid)",
          axis: "var(--evz-chart-axis)",
          label: "var(--evz-chart-label)",
        },
      },
      borderRadius: {
        sm: "var(--evz-radius-sm)",
        md: "var(--evz-radius-md)",
        lg: "var(--evz-radius-lg)",
      },
      boxShadow: {
        1: "var(--evz-shadow-1)",
        2: "var(--evz-shadow-2)",
      },
      fontFamily: {
        sans: ["var(--evz-font-sans)"],
        mono: ["var(--evz-font-mono)"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
