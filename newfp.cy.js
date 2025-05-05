describe ('User Login - Valid Credentials', () => {
  it('should log in successfully with valid credentials', () => {
  cy.visit('https://testzootopia.loremipsum.ge/ka/register')
  cy.get('.menu-pop > .rprof').click()
  cy.get(':nth-child(5) > .imail').type('Tornikeabrama@gmail.com')
  cy.get('.input-shablon > :nth-child(6) > .ipass').type('toko123')
  cy.get('.avtorization > .input-shablon > .form-button').click()
  cy.get('.menu-pop > .active').click()
  })
})