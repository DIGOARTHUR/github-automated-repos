// generate-changelog.js
const { writeFileSync } = require('fs');
const conventionalChangelog = require('conventional-changelog');

const config = {
  config: require('./changelog-config.js'),
  context: {
    host: 'https://github.com',
    owner: 'DIGOARTHUR',
    repository: 'github-automated-repos'
  },
  releaseCount: 0
};

conventionalChangelog(config)
  .on('data', (chunk) => {
    writeFileSync('CHANGELOG.md', chunk);
  });