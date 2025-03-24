module.exports = {
    preset: 'angular',
    releaseCommitMessageFormat: 'chore(release): {{currentTag}}',
    writerOpts: {
      transform: (commit, context) => {
        // Ignorar completamente commits do tipo 'docs' e 'chore'
        if (['docs', 'chore'].includes(commit.type)) {
          return false; // Retornar false remove completamente o commit
        }
  
        // Mapear tipos para nomes mais amigáveis
        const typeMap = {
          feat: '✨ Features',
          fix: '🐛 Bug Fixes',
          perf: '🚀 Performance',
          refactor: '♻️ Refactors',
          improvement: '✅ Improvements'
        };
  
        // Renomear tipos
        if (typeMap[commit.type]) {
          commit.type = typeMap[commit.type];
        }
  
        // Processar referências de issues
        if (context.repository) {
          const issueUrl = `${context.host}/${context.owner}/${context.repository}/issues/`;
          commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
            return `[#${issue}](${issueUrl}${issue})`;
          });
        }
  
        return commit;
      },
      groupBy: 'type',
      commitGroupsSort: (a, b) => {
        const order = ['✨ Features', '🐛 Bug Fixes', '🚀 Performance', '♻️ Refactors'];
        return order.indexOf(a.title) - order.indexOf(b.title);
      },
      commitsSort: ['scope', 'subject'],
      noteGroupsSort: 'title',
      notesSort: 'text'
    }
  };