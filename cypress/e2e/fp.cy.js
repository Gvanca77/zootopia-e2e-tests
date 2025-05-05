//რეგისტრაცია სწორი მონაცემებით//
 
describe ('correct registration', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register')
    cy.get(':nth-child(1) > .ismile').type('Gvanca Abramishvili')
    cy.get(':nth-child(2) > .imail').type('abramishvili.gvanca71@gmail.com')
    cy.get('.ipir').type('01001098797')
    cy.get(':nth-child(4) > .itel').type('5514442401')
    cy.get(':nth-child(5) > .ipass').type('gvanca12345')
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type('gvanca12345')
    cy.get('input[name="agree"]').check({ force: true })
    cy.get('.regsub').click()
    cy.contains('successfully registration').should.not('be.visible')

  })
})

//ავტორიზაცია არსებული მონაცემებით//
  describe ('User Login - Valid Credentials', () => {
    it('should log in successfully with valid credentials', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register')
    cy.get('.menu-pop > .rprof').click()
    cy.get(':nth-child(5) > .imail').type('abramishvili.gvanca77@gmail.com')
    cy.get('.input-shablon > :nth-child(6) > .ipass').type('gvanca123')
    cy.get('.avtorization > .input-shablon > .form-button').click()
    cy.get('.menu-pop > .active').click()
   
  
    })
    })

    //კალათაში ნივთის დამატება//
    describe('Add Product to Cart', () => {
      it('passes', () => {
        cy.visit('https://testzootopia.loremipsum.ge/ka/')
        cy.get('.menu-pop > .active').click()
        cy.get('.popsrch > input').click()
        cy.get('.popsrch').click()
        cy.get('.pug > .seepro').click()
        cy.get('.product-list > :nth-child(1)').click()
        cy.get('.pro-jami').click()
        cy.get('.add-pro > figure').click()
        cy.contains('დამატებულია').should('exist')

        
      })
    })
//  დამატებული ნივთის წაშლა კალათიდან 
     describe('Delete Product from Cart', () => {
      it('passes', () => {
        cy.visit('https://testzootopia.loremipsum.ge/ka/')
        cy.get('.menu-pop > .active').click()
        cy.get('.popsrch > input').click()
        cy.get('.popsrch').click()
        cy.get('.pug > .seepro').click()
        cy.get('.product-list > :nth-child(1)').click()
        cy.get('.pro-jami').click()
        cy.get('.add-pro > figure').click()
        cy.contains('დამატებულია').should('exist')
        cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
        cy.get('.minus').click()
        cy.get('.empty > p').should('be.visible')

      })
    
  })
//რეგისტრაცია არასწორი მონაცემებით//
 
describe ('Registration Incorrect Credentials )', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register');
    cy.get(':nth-child(1) > .ismile').type('გ');
    cy.get(':nth-child(2) > .imail').type('abramishvili.gvanca@mail.com');
    cy.get('.ipir').type('01010101014')
    cy.get(':nth-child(4) > .itel').type('5514440000')
    cy.get(':nth-child(5) > .ipass').type('gvanca2')
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type('gvanca2')
    cy.get('input[name="agree"]').check({ force: true })
    cy.get('.regsub').click()
    cy.contains('Sorry, the page you are looking for could not be found.').should ('be.visible')
   
   })
  })
     
    