import type {Config} from 'jest';
import {compilerOptions} from './tsconfig.json';

function getAliases() {
  const paths: Record<string, string> = {};
  Object.entries(compilerOptions.paths).forEach(([alias, [value]]) => {
    paths[`^${alias.slice(4, -2)}/(.*)$`] =
      `<rootDir>/src/${value.slice(0, -2)}/$1`;
  });
  return paths;
}

const config: Config = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/assets/',
    '/src/resources/',
    '/src/types/',
    '/src/index\\.tsx?$',
  ],
  coverageReporters: ['html', 'text'],
  fakeTimers: {
    enableGlobally: true,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    ...getAliases(),
  },
  setupFilesAfterEnv: ['@testing-library/react'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  verbose: true,
};

export default config;
