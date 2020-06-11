describe('Testing our form', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/')
  });
  
  it('adds text to inputs and submits form', function() {
    cy.get('[data-cy=name]')
      .type('Ryan McInnis')
      .should('have.value', 'Ryan McInnis');
    cy.get('[data-cy=email]')
      .type('Ryan@email.com')
      .should('have.value', 'Ryan@email.com');
    cy.get('[data-cy=pass]')
      .type('password')
      .should('have.value', 'password');
    cy.get('[data-cy=terms]')
      .check()
      .should('be.checked')
    cy.get('[data-cy=submit]')
    .click()
  })

  it('tests inline form validation', function() {
    cy.get('[data-cy=name]')
      .type('Ryan McInnis').clear();
    cy.get('[data-cy=email]')
      .type('Ryan@email.com').clear();
    cy.get('[data-cy=pass]')
      .type('Ryan McInnis').clear();
    cy.get('.error')
      .should('have.length', 3);
    cy.get('[data-cy=email]')
      .type('Ryan@email');
    cy.get('.error')
      .should('have.length', 3);
  })
})