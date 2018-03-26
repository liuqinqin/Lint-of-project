const optionJustifyIndent = 10;
const conventionalTypes = require('conventional-commit-types').types;

const customScopes = {
  'scaffold': 'all development tools',
  'changelog': 'used for updating the release notes in CHANGELOG.md',
  'deps': 'dependencies changes',
  'common': 'common components',
  'home': 'homepage of this project',
  'team': 'rank and team area',
  'account': 'auth, settings and account homepage',
  'detail': 'post detail page',
  'list': 'post list page',
  'creation': 'post edit page',
};

module.exports = {
   /**
   * configurations for commitlint
   */
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', Object.keys(customScopes).map(key => key)],
  },
  /**
   * configurations for cz-customizable
   */
  types: Object.keys(conventionalTypes).map(key => ({ value: key, name: `${key}:${' '.repeat(optionJustifyIndent - key.length)}${conventionalTypes[key].description}` })),
  scopes: [{ name: '(empty)', value: false }, ...Object.keys(customScopes).map(key => ({ value: key, name: `${key}:${' '.repeat(optionJustifyIndent - key.length)}${customScopes[key]}` }))],
  allowBreakingChanges: ['feat', 'fix'],
};
