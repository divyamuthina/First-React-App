// cypress/e2e/home.cy.ts

describe('Home Page', () => {
  it('should render the Home component', () => {
    // Visit the base URL (make sure your app is running)
    cy.visit('/'); // Adjust this if your Home component is at a different route

    // Check if the Home component renders the correct text
    cy.contains('Home').should('be.visible');
  });
});
