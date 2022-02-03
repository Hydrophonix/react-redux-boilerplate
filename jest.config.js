module.exports = {
    rootDir:   ".",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: [
        "js",
        "jsx",
        "json",
        "ts",
        "tsx",
        "node",
    ],
    moduleDirectories: [
        "node_modules",
        "<rootDir>",
    ],
    // Process
    preset:              "ts-jest",
    testEnvironment:     "jsdom",
    setupFilesAfterEnv:  [ "@testing-library/jest-dom/extend-expect" ],
    clearMocks:          true,
    // Coverage
    collectCoverageFrom: [
        "<rootDir>/src/**/*.((t|j)s|tsx)",
        "!<rootDir>/node_modules/",
    ],
    coverageDirectory: "<rootDir>/coverage",
    coverageReporters: [
        "clover",
        "json",
        "lcov",
        "html",
        [ "text", { skipFull: true }],
    ],
    coverageThreshold: {
        global: {
            branches:   90,
            functions:  90,
            lines:      90,
            statements: 90,
        },
    },
};
