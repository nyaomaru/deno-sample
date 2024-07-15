import { type Config } from "tailwindcss";
import typography from "npm:@tailwindcss/typography@0.5.13";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [typography],
} satisfies Config;
