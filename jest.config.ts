const esmModules = [
  'got',
  '@sindresorhus/is',
  'p-cancelable',
  '@szmarczak/http-timer',
  'cacheable-request',
  'normalize-url',
  'get-stream',
];
export default {
  displayName: 'nx-node-22-typescript-5-8-require-esm',
  preset: './jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        useESM: true,
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  extensionsToTreatAsEsm: ['.ts'],
  transformIgnorePatterns: [`/node_modules/(?!${esmModules.join('|')})`],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  coverageDirectory: './coverage/nx-node-22-typescript-5-8-require-esm',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)',
  ],
};
