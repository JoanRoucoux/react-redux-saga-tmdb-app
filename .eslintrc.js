module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  parser: "babel-eslint",
  extends: "airbnb",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    "react/prop-types": "off",
    "react/forbid-prop-types": 0,
    "react/state-in-constructor": 0,
    "react/static-property-placement": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "max-len": [1, 120, 2, { ignoreComments: true }],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    "linebreak-style": ["error", "unix"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    quotes: ["error", "single"],
    semi: ["error", "always"],
  },
};
