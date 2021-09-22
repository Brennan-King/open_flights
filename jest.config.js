module.exports = {
  testMatch: [
    '**/jest/**/(*.)(spec|test).js?(x)',
  ],
  moduleNameMapper: {
    '\\.(css|scss|svg|jpg|png|md|jpeg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  snapshotSerializers: [
    './node_modules/enzyme-to-json/serializer',
  ],
};
