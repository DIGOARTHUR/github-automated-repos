module.exports = {
    types: [
      { type: 'feat', section: 'Features' },
      { type: 'fix', section: 'Bug Fixes' },
      { type: 'chore', section: 'Chores' },
      { type: 'docs', section: 'Documentation' },
      { type: 'improvements', section: 'Improvements' },
      { type: 'style', section: 'Styles' },
      { type: 'refactor', section: 'Refactorings' },
      { type: 'perf', section: 'Performance' },
      { type: 'test', section: 'Tests' },
      { type: 'build', section: 'Build System' },
      { type: 'ci', section: 'Continuous Integration' }
    ],
    scope: '*' // Adicionado para incluir todos os escopos
  };