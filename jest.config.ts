export default {
  roots: ['<rootDir>/src/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
