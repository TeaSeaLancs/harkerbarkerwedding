module.exports = {
    extends: "eslint:recommended",
    parser: 'espree',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: "module",
        ecmaFeatures: {
            "jsx": true,
            experimentalObjectRestSpread: true
        }
    },
    env: {
        node: true,
        browser: true,
        es6: true
    },
    plugins: ["react", "import"],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-console": 0,
        "semi": 2
    }
};
