//კალათაში პროდუქტის დამატება, რაოდენობის გაზრდა და კალათიდან ამოშლა.

import userData from '../fixtures/example.json'

describe('cart', () => {
    it('addProduqts', () => {
        cy.visit ('https://testzootopia.loremipsum.ge/ka')
        
        
        cy.get('.rprof > p').click()
        cy.login2 (userData.email, userData.password)
        cy.get('.avtorization > .input-shablon > .form-button').click()
        cy.get('.pug > .seepro').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart > p').click()
        cy.get(':nth-child(3) > .price-cart > .product-cart').click()
        cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
        cy.get('.swiper-slide-active > .spinner > .plus').click().click()
        cy.get('.swiper-slide-next > .clear > a').click()
        cy.get('.clear > a').click()
        cy.contains("კალათა ცარიელია").should("be.visible")
        cy.get('.menu-pop > .active').click()


    })
})