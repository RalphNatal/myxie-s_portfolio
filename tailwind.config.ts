import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/** Maps a CSS variable holding "R G B" channels to a Tailwind color that supports opacity modifiers. */
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    // A deliberately small type scale: 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64.
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.6" }],
      lg: ["1.125rem", { lineHeight: "1.6" }],
      xl: ["1.5rem", { lineHeight: "1.3" }],
      "2xl": ["2rem", { lineHeight: "1.2" }],
      "3xl": ["3rem", { lineHeight: "1.1" }],
      "4xl": ["4rem", { lineHeight: "1.05" }],
    },
    extend: {
      colors: {
        canvas: token("canvas"),
        surface: token("surface"),
        subtle: token("subtle"),
        line: token("line"),
        ink: token("ink"),
        muted: token("muted"),
        accent: {
          DEFAULT: token("accent"),
          strong: token("accent-strong"),
          hover: token("accent-hover"),
        },
        "on-accent": token("on-accent"),
        sage: {
          DEFAULT: token("sage"),
          strong: token("sage-strong"),
        },
      },
      fontFamily: {
        sans: ["Inter", "Inter Fallback", ...defaultTheme.fontFamily.sans],
        display: ["Fraunces", "Fraunces Fallback", ...defaultTheme.fontFamily.serif],
      },
      letterSpacing: {
        heading: "-0.02em",
        eyebrow: "0.12em",
      },
      maxWidth: {
        content: "75rem",
      },
      spacing: {
        nav: "var(--nav-height)",
      },
      borderRadius: {
        card: "1rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(var(--shadow) / 0.04), 0 4px 16px -4px rgb(var(--shadow) / 0.08)",
        lift: "0 2px 4px rgb(var(--shadow) / 0.04), 0 16px 32px -12px rgb(var(--shadow) / 0.18)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "status-ping": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "80%, 100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 400ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "status-ping": "status-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
