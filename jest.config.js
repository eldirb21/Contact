module.exports = {
  transform: {'^.+\\.(js|jsx)$': 'babel-jest'},
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/(?!axios)'],
};
