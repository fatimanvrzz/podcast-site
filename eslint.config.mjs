import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from "@next/eslint-plugin-next"; // Next.js plugin
import typescriptPlugin from "@typescript-eslint/eslint-plugin"; // TypeScript plugin

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "@typescript-eslint": typescriptPlugin, // TypeScript plugin
      "@next/next": nextPlugin, // Next.js plugin
    },
    rules: {
      "react/react-in-jsx-scope": "off", // .eslintrc.json-dan əlavə edildi
      "@typescript-eslint/no-unused-vars": "warn", // Əlavə qayda
    },
  },
];

export default eslintConfig;