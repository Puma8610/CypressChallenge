require('cypress-xpath')

class datosPersonalesPOM{

    navigate(){
        before(()=>{
            cy.visit('http://opencart.abstracta.us/index.php?route=common/home')
        })
    }

    selectAProduct(productName){
        cy.contains(productName).click({force: true})
    }

    accessShoppingCart(){
        cy.get('#cart-total').click()
        cy.xpath("//strong//i[@class='fa fa-shopping-cart']").click()
    }



}

export default datosPersonalesPOM;