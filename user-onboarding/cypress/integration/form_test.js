describe('Testing our form', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/')
  });
  
  it('adds text to inputs and submits form', function() {
    cy.get('[data-cy=name]')
      .type('Ryan McInnis')
      .should('have.value', 'Ryan McInnis');
    cy.get('[data-cy=pass]')
      .type('password')
      .should('have.value', 'password');
    cy.get('[data-cy=terms]')
      .check()
      .should('be.checked')
    cy.get('[data-cy=submit]')
    .click()
  })

  it('tests form validation', function() {
    cy.get('[data-cy=name]')
      .type('Ryan McInnis').clear();
    expect('[data-cy=name] .error').to.exist
    cy.get('[data-cy=pass]')
      .type('Ryan McInnis').clear();
    expect('[data-cy=pass] .error').to.exist
  })
})