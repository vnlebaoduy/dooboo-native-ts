const { defaults: tsJestConfig } = require('ts-jest/presets');

module.exports = {
  ...tsJestConfig,
  "preset": "react-native",
  "transformIgnorePatterns": [
    "node_modules/(?!(.*-)?react-(.*-)?native(-.*)?)"
  ],
  "setupFiles": [
    "./test/jestSetup.ts"
  ],
  "globals": {
    "window": {},
    "ts-jest": {
      "babelConfig": false,
      "tsConfig": "tsconfig.jest.json"
    }
  },
  "transform": {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(ts|tsx)$": "ts-jest"
  },
  // "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "testPathIgnorePatterns": [
    "\\.snap$",
    "<rootDir>/node_modules/"
  ],
  "cacheDirectory": ".jest/cache",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "ios.ts",
    "ios.tsx",
    "android.ts",
    "android.tsx"
  ],
  // "moduleNameMapper": {
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/assetsTransformer.js"
  // },
};
