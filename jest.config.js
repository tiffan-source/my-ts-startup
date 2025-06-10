const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  collectCoverage: true,
   coverageDirectory: "coverage",
   collectCoverageFrom: [
    "src/**/*.ts",
   ],
   rootDir: "./tests"
};
