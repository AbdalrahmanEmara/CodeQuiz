module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Must be last!
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-hooks", "react-refresh", "prettier"],
  rules: {
    // Prettier
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],

    // React
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "react/prop-types": "off", // Not needed if using TypeScript
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-no-target-blank": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-refresh/only-export-components": "warn",

    // General
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-debugger": "warn",
    "prefer-const": "error",
    "no-var": "error",

    // Import ordering (enforced by Prettier plugin)
    "sort-imports": "off", // Handled by Prettier plugin
  },
  ignorePatterns: ["dist", "node_modules", ".eslintrc.cjs"],
};