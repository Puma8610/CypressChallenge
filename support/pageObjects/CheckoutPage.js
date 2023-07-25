require('cypress-xpath')

class CheckoutPOM{

    selectCustomerOption(option){
        cy.xpath("//input[@value='guest']").should("be.enabled").click().check()
    }

    clickContinueButtonCheckoutSection(){
        cy.get('#button-account').click()
    }

    fillPersonalDetails(){
        cy.wait(1000)
        cy.get('#input-payment-firstname').type('Lio')
        cy.get('#input-payment-lastname').type('Messi')
        cy.get('#input-payment-email').type('lio@asdf.com')
        cy.get('#input-payment-telephone').type('1234567890')
        cy.get('#input-payment-address-1').type('1234')
        cy.get('#input-payment-city').type('Medellin')
        cy.get('#input-payment-postcode').type('12345')
        cy.get('#input-payment-country').select('Colombia')
        cy.get('#input-payment-zone').select('Antioquia')
    }

    clickContinueButtonBillingDetailsSection(){
        cy.get('#button-guest').click()
    }

    acceptPaymentMethod(){
        cy.get('[name="agree"]').check()
        cy.get('#button-payment-method').click()
    }

    clickConfirmOrderButton(){
        cy.get('#button-confirm').click()
    }

}

export default CheckoutPOM;