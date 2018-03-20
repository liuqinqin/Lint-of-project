module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['scaffold', 'changelog', 'deps', 'common', 'home', 'team', 'account', 'detail', 'list', 'creation']]
  }
};
