require('cypress-xpath')

class ShoppingCartPOM{

    clickCheckoutButton(){
        cy.xpath("//a[@class='btn btn-primary']").click()
    }

}

export default ShoppingCartPOM;