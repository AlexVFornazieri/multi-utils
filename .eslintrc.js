module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'vue/multi-word-component-names': 0,
    'vue/no-mutating-props': ['warn'],
    'import/order': ['error', {
      pathGroups: [
        {
          pattern: '@/**',
          group: 'external',
        },
      ],
    }],
  },

  settings: {
    'import/core-modules': [
      'vue',
      'vuex',
    ],
  },
}
