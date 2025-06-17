import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    plugins: { js, prettier: pluginPrettier },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },

  {
    rules: {
      ...prettierConfig.rules,
    },
  },

  pluginReact.configs.flat.recommended,
]);
