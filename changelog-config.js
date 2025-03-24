module.exports = {
  preset: 'angular',
  writerOpts: {
    transform: (commit, context) => {
      if (!commit.hash) return null;
      
      // Lista completa de scopes especiais
      const specialScopes = [
        'useGithubAutomatedRepos',
        'StackLabels',
        'StackIcons',
        'Banner',
        'API',
        'Repository',
        'QueryClient',
        'Hooks',
        'Icons',
        'docs'
      ];
      
      // Verifica se o commit deve ser incluído:
      // 1. É do tipo feat ou fix OU
      // 2. Tem um scope especial
      const shouldInclude = 
        ['feat', 'fix'].includes(commit.type) ||
        (commit.scope && specialScopes.includes(commit.scope));
      
      if (!shouldInclude) return null;
      
      commit.hashLink = `https://github.com/DIGOARTHUR/github-automated-repos/commit/${commit.hash}`;
      commit.shortHash = commit.hash.substring(0, 7);
      
      // Padronização de nomes de scopes
      if (commit.scope) {
        commit.scope = commit.scope
          .replace(/stack[-_]?icons?/i, 'StackIcons')
          .replace(/stack[-_]?labels?/i, 'StackLabels')
          .replace(/banner/i, 'Banner')
          .replace(/api/i, 'API')
          .replace(/repository/i, 'Repository')
          .replace(/query[-_]?client/i, 'QueryClient')
          .replace(/hooks?/i, 'Hooks')
          .replace(/icons?/i, 'Icons');
      }
      
      // Agrupa em General se:
      // 1. Não tem scope OU
      // 2. Tem scope mas não está na lista especial
      if (!commit.scope || !specialScopes.includes(commit.scope)) {
        commit.scope = 'General';
      }
      
      return commit;
    },
    groupBy: 'scope',
    commitGroupsSort: (a, b) => {
      // Ordem customizada dos grupos
      const order = [
        'useGithubAutomatedRepos',
        'StackIcons',
        'StackLabels',
        'Banner',
        'API',
        'Repository',
        'QueryClient',
        'Hooks',
        'Icons',
        'docs',
        'General'
      ];
      return order.indexOf(a.title) - order.indexOf(b.title);
    },
    commitsSort: ['type', 'subject'],
    headerPartial: '<a name="{{version}}"></a>\n# {{version}} ({{date}})\n\n',
    commitPartial: '| [{{shortHash}}]({{hashLink}}) | {{type}} | {{subject}} |\n',
    mainTemplate: `{{> header}}
{{#each commitGroups}}
### {{title}}
| Commit | Type | Description |
|--------|------|-------------|
{{#each commits}}{{> commit}}{{/each}}

{{/each}}`
  }
};