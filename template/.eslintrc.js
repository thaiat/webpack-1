// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  {{#if_eq lintConfig "standard"}}
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  {{/if_eq}}
  {{#if_eq lintConfig "airbnb"}}
  extends: 'airbnb-base',
  {{/if_eq}}
  // required to lint *.vue files
  plugins: [
    'html',
    'nodeca'
  ],
  {{#if_eq lintConfig "airbnb"}}
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  {{/if_eq}}
  // add your custom rules here
  'rules': {
    {{#if_eq lintConfig "standard"}}
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': [2, 'never'],
    'camelcase': 0,
    'complexity': [0, 11],
    'consistent-return': 2,
    'consistent-this': [1, 'self'],
    'curly': [2, 'all'],
    'dot-notation': 2,
    'eol-last': 0,
    'eqeqeq': [2, 'smart'],
    'keyword-spacing': [2, { 'before': true, 'after': true, 'overrides': {} }],
    'indent': [0, 2, { 'SwitchCase': 1 }],
    'nodeca/indent': [2, 'spaces', 2],
    'max-depth': [0, 4],
    'max-len': [0, 80, 4],
    'max-nested-callbacks': [0, 2],
    'max-params': [0, 15],
    'max-statements': [0, 10],
    'new-cap': [0],
    'new-parens': 2,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-delete-var': 2,
    'no-dupe-keys': 2,
    'no-empty': 0,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-invalid-regexp': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 0,
    'no-loop-func': 2,
    'no-mixed-spaces-and-tabs': [2, true],
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, { 'max': 1 }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 0,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 0,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-process-exit': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-sequences': 2,
    'no-shadow': 0,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-sync': 0,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-underscore-dangle': 0,
    'no-unreachable': 2,
    'no-unused-vars': [2, { 'args': 'none', 'vars': 'local' }],
    'no-use-before-define': 0,
    'no-warning-comments': [1, { 'terms': ['todo', 'fixme', 'xxx'], 'location': 'start' }],
    'no-with': 2,
    'padded-blocks': 0,
    'quotes': [2, 'single'],
    'semi': ['error', 'always'],
    'semi-spacing': 2,
    'space-before-function-paren': [2, 'never'],
    'spaced-comment': 0,
    'space-infix-ops': [2, { 'int32Hint': false }],
    'strict': [2, 'global'],
    'use-isnan': 2,
    'valid-jsdoc': [2, { 'prefer': { 'return': 'returns' }, 'requireReturn': false, 'requireParamDescription': true }],
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yoda': [2, 'never', { 'exceptRange': true }]
  }
};
