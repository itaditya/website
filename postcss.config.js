const purgecssConfig = [
  '@fullhuman/postcss-purgecss',
  {
    // Specify the paths to all of the template files in your project
    content: ['./src/**/*.js'],
    // make sure css reset isnt removed on html and body
    whitelist: ['html', 'body'],
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: ['tailwindcss', ...(process.env.PURGE_CSS ? [purgecssConfig] : [])],
};
