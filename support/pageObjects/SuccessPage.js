require('cypress-xpath')

class SuccessPagePOM{

    getSuccesfullText( text){
        cy.contains('Your order has been placed!').should('be.visible')
    }

}

export default SuccessPagePOM;