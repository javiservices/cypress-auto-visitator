const dni = Cypress.env("dni")
it('loads page', () => {
  cy.visit('/present');
  cy.wait(1000)
  cy.get('#mat-input-0').type(dni);
  cy.wait(1000)
  cy.get('button.m-solid-blue').click();
  cy.url().should('contain', '/hasBeenPresented')
  cy.contains("Llegada confirmada")
})


