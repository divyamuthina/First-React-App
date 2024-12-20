describe('NotFound Page', () => {
  it('should render the NotFound component', () => {
    cy.visit('/notFound');
    cy.contains('NotFound').should('be.visible');
  });
});
