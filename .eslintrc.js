module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@next/next/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "simple-import-sort", "import"],

  rules: {
    "linebreak-style": 0,
    indent: "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": ["off"],
    "react/no-array-index-key": 0,
    "react/function-component-definition": "off",
    "react/jsx-one-expression-per-line": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    quotes: ["error", "double"],
    "implicit-arrow-linebreak": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-shadow": "off",
    "no-unused-vars": "warn",
    "no-underscore-dangle": "off",
    "no-tabs": "off",
    "no-param-reassign": "off",
    "no-undef": "off",
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    "max-len": "off",
    "comma-dangle": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/style-prop-object": 0,
    "import/no-cycle": [0, { ignoreExternal: true }],

    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // External packages.
          ["^"],
          // Internal packages.
          ["^@"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
