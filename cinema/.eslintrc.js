module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:react/recommended", "plugin:react/jsx-runtime"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-invalid-this": "error",
        // "arrow-parens": ["error", "as-needed"],
        "no-duplicate-imports": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "max-len": ["error", { "code": 100 }],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": 0
    }
}
