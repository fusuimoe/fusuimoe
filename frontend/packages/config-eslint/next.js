const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  plugins: ['tailwindcss'],
  extends: [
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'turbo',
  ],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '{next,next/**}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/domains/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/application/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/adaptors/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/drivers/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/application/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
  },
};
