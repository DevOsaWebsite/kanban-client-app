/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    'postcss-short': {},
    'postcss-simple-vars': {},
    'postcss-mixins': {},
    'postcss-discard-comments': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-merge-rules': {},
    'postcss-combine-duplicated-selectors': {},
    'postcss-sorting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {cssnano: {}} : {}),
  },
};

export default config;
