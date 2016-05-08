module.exports = {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "airbnb"
    ],
    "plugins": [
        "react"
    ],
    "rules": {
      "new-cap": [2, {
          "capIsNewExceptions": [
          "Map",
          "List",
          ]
      }]
    },
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "mocha": true
    }
};
