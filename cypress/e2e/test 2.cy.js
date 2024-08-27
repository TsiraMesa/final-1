// რეგისტრირებული მომხარებლის ავორიზაციის გავლა და //გვერდიდან გასვლა

import userData from '../fixtures/example.json'

describe('avtorization', () => {
    it('login', () => {
        cy.visit('https://testzootopia.loremipsum.ge/ka')



        cy.get('.rprof > p').click()
        cy.login2(userData.email, userData.password)
        cy.get('.avtorization > .input-shablon > .form-button').click()
        cy.contains("პროფილი").should("be.visible")
        cy.get('.menu-pop > .iprof > p').click()
        //cy.get('.logout-mobile').click()

    })
})