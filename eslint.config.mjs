import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'project/**', 'chats/**'] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // The copy is French and quotes apostrophes typographically; escaping every
      // one of them in JSX would only make the source harder to proof-read.
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default config;
