require('cypress-xpath')

class CheckoutPOM{

    selectCustomerOption(option){
        cy.wait(2000)
        cy.visit("https://opencart.abstracta.us/index.php?route=checkout/checkout")
        cy.get(".col-sm-6").click()
        cy.contains('Guest Checkout').should("be.visible").click({ force: true })
        //cy.contains('Guest Checkout').click({ force: true })
        //cy.get(".radio").check('guest')
        //cy.log(cy.xpath("//input[@value='guest']").should("be.enabled"))
        //cy.xpath("//input[@value='guest']").check({ force: true })
    }

    clickContinueButton(){
        cy.wait(2000)
        cy.get('#button-shipping-method').click();
        //cy.xpath("//*[@id='button-account']").click({force: true})
    }

}

export default CheckoutPOM;