describe('Test all pages visually', () => {
  const pages = ['/', '/projects', '/blog', '/blog/async-await-hell', '/about', '/work', '/social'];

  pages.forEach(page => {
    it(`test ${page}`, () => {
      cy.visit(page);
      cy.percySnapshot();
    });
  });
});
