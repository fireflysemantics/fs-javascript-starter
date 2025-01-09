import eslint from "@eslint/js";
import globals from "globals";

export default [
      {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.mocha
            }
        }
    },
    // apply recommended rules to JS files
    {
        files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
        rules: eslint.configs.recommended.rules
    },
    {
        ignores: ["rollup.config.js", "web-test-runner.config.js", "doc"]
    }
]
