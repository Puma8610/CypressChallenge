require('cypress-xpath')

class ProductPOM{

    selectAProduct(){
        cy.get("#button-cart").click()
    }

}

export default ProductPOM;