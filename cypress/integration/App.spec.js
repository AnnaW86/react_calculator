describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  })

  it('should display updated running total', () => {
    cy.get('#number5').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '54');
  })

  it('should update the display with the result of an arithmetical operation', () => {
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '12');
  })

  it('should chain multiple operations together', () => {
    cy.get('#number4').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_subtract').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5');
  })

  it('should be able to output decimal numbers', () => {
    cy.get('#number4').click();
    cy.get('#operator_divide').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.8');
  })

  it('should be able to output negative numbers', () => {
    cy.get('#number4').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-5');
  })

  it('should be able to output large numbers', () => {
    cy.get('#number4').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4e+21');
  })  

  it('should return error on divison by zero', () => {
    cy.get('#number4').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'error - cannot divide by 0');
  })
})