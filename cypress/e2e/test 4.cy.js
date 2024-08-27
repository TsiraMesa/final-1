//
//კალათაში პროდუქტის დამატება.

import userData from '../fixtures/example.json'

describe('cart', () => {
    it('addProduqts', () => {
        cy.visit ('https://testzootopia.loremipsum.ge/ka')
        
        
        cy.get('.rprof > p').click()
        cy.login2 (userData.email, userData.password)
        cy.get('.avtorization > .input-shablon > .form-button').click()
        cy.contains("ტოპ პროდუქცია").should("be.visible")
        cy.get('.popmenu-burger > .burger-span').click()
        cy.get('[imgsrc="/uploads/ProductCategory/335031597313845.png"] > [href="javascript:void(0)"]').click()
        cy.get('.cat-down.active > .category-holder > :nth-child(1) > .category-drop-title').click()
        cy.get('.category-holder > .active > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart').click()
        cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
        cy.get('.cart-item'). should ("be.visible")
        //cy.get('.menu-pop > .active').click()
    })
})
