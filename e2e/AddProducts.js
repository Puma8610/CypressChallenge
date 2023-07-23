///<reference types="cypress"/>

import HomePage from "../support/pageObjects/HomePage"
import Product from "../support/pageObjects/Product"
import ShoppingCart from "../support/pageObjects/ShoppingCart"
import Checkout from "../support/pageObjects/Checkout"

describe('Select 2 products and make the purchase', () =>{

    const homePage = new HomePage()
    const product = new Product()
    const shoppingCart = new ShoppingCart()
    const checkout = new Checkout()
    homePage.navigate()


    it.only("Select a product", () =>{
        homePage.selectAProduct("MacBook")
        product.selectAProduct()
        //cy.go('back')
        //homePage.selectAProduct("iPhone")
        //product.selectAProduct()
        homePage.accessShoppingCart()
        shoppingCart.clickCheckoutButton()
        checkout.selectCustomerOption("Guest Checkout")
        checkout.clickContinueButton()

       

    })


})