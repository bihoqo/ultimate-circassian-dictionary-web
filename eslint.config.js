const js = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const hooksPlugin = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");

const config = tseslint.config(
  {
    ignores: ["dist", "next.config.js", ".prettierrc.js", "public/*"],
    plugins: {
      "react-hooks": hooksPlugin,
    },
  },
  {
    extends: [
      reactRefresh.configs.recommended,
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "react-hooks/exhaustive-deps": "error",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "react/display-name": "off",
      "prefer-const": "error",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/migration-from-tailwind-2": "off",
      curly: "error",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
);

module.exports = config;
