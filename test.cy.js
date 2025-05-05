describe('registracia', () => {
  it('passes', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('#customer_menu_top > li > a').click();
    cy.get('#loginFrm_loginname').type('Gvanca1');
    cy.get('#loginFrm_password').type('Gvanca123');
    cy.get('#loginFrm > fieldset > .btn').click();
    cy.get('.side_account_list > :nth-child(3) > a').click()
  })
})
    //new account//
    cy.get('#AccountFrm_firstname').type('123');
    cy.get('#AccountFrm_lastname').type('456');
    cy.get('.col-md-12 > .btn-orange').click();
    cy.get('.alert').should("be.visible");
    // new address//
    cy.get('.side_account_list > :nth-child(5) > a') .click();
    cy.get('tr > .pull-right > .btn').click()
    cy.get('#AddressFrm_address_1').type('1lake ave')
    cy.get('#AddressFrm_city').type('Tbilisi')
    cy.get('#AddressFrm_zone_id').select('Abkhazia')
    cy.get('#AddressFrm_postcode').type('07071')
    cy.get('#AddressFrm_country_id').select('Georgia')
    cy.get('.col-md-12 > .btn-orange').click()
    cy.get('.alert').should('be.visible');
    //change password//
    cy.get('.side_account_list > :nth-child(4) > a').click()
    cy.get('#PasswordFrm_current_password').type('Gvanca123')
    cy.get('#PasswordFrm_password').type('axali1')
    cy.get('#PasswordFrm_confirm').type('axali1')
    cy.get('.col-md-12 > .btn-orange').click()
    cy.get('.alert').should('be.visible')

cy.get(':nth-child(2) > .imail').type('Tornikeabrama@gmail.com')
  cy.get('.ipir').type('01001098563')
  cy.get(':nth-child(4) > .itel').type('9086167896')
  cy.get(':nth-child(5) > .ipass').type('toko123')
  cy.get('.reg-form-left > :nth-child(6) > .ipass').type('toko123')
  cy.get('input[name="agree"]').check({ force: true })
  cy.get('.regsub').click()
  cy.contains('successfully registration').should.not('be.visible')

