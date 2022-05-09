module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "airbnb-base",
        'plugin:react/recommended'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "rules": {
        "semi": 0,
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": "off",
    },
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [
              ".js",
              ".jsx"
            ]
          }
        }
      }
}
