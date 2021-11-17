describe('login page', function(){
  it('check the button main page',function(){
  cy.visit('http://127.0.0.1:8000/')
    cy.contains('Primary')
    cy.contains('My Cards Dark')
  })
})
