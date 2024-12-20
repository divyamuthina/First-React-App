describe('About Page', () => {
  it('should render the About component', () => {
    cy.visit('/about');
    cy.contains('About').should('be.visible');
  });
});
