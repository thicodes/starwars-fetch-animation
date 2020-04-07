/// <reference types="cypress" />

describe('SWAPI', () => {
  it('should show logo', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="Logo"]').should('be.visible');
  });
});
