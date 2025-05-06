Cypress.Commands.add('registerUser', (user) => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register')
    cy.get(':nth-child(1) > .ismile').type(user.fullname)
    cy.get(':nth-child(2) > .imail').type(user.email)
    cy.get('.ipir').type(user.idnumber)
    cy.get(':nth-child(4) > .itel').type(user.phone)
    cy.get(':nth-child(5) > .ipass').type(user.password)
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(user.password)
    cy.get('input[name="agree"]').check({ force: true })
    cy.get('.regsub').click()
  })
  
  Cypress.Commands.add('loginUser', (credentials) => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register')
    cy.get('.menu-pop > .rprof').click()
    cy.get(':nth-child(5) > .imail').type(credentials.email)
    cy.get('.input-shablon > :nth-child(6) > .ipass').type(credentials.password)
    cy.get('.avtorization > .input-shablon > .form-button').click()
  })