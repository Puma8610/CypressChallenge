require('cypress-xpath')

class ShoppingCartPOM{

    clickCheckoutButton(){
        cy.wait(2000)
        cy.xpath("//a[@class='btn btn-primary']").click()
    }

}

export default ShoppingCartPOM;