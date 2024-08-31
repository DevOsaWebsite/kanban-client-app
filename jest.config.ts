import {type Config} from '@jest/types';
import nextJest from 'next/jest.js';

const config: Config.InitialOptions = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
const createJestConfig = nextJest({
  dir: './',
});

export default createJestConfig(config);
