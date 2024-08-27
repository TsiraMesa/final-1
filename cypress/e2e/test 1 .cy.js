//
//მომხმარებლის რეგისტრაცია ახალი მონაცემებით და პერსონალური მონაცემების სემოწმება.

import userData from '../fixtures/example.json'
describe('registration', () => {
    it('login', () => {
        cy.visit('https://testzootopia.loremipsum.ge/ka')

        let random = Math.floor(Math.random() * 1000)

        cy.get('.menu-pop > .rprof').click()
        cy.get('.input-shablon > p > a').should("be.visible").click()
        cy.contains("რეგისტრაცია").should("be.visible")
        cy.login(userData.name, userData.id, userData.mob, userData.password, userData.password1)
        cy.get(':nth-child(2) > .imail').type  ("ciramesablishvili "+ random +" @gmail.com")
        cy.get("label:nth-child(2) > svg:nth-child(1) > g:nth-child(1) > rect:nth-child(1)").click({ force: true })
        cy.get('.regsub').click()
        cy.get('.bg-transparent').click()
        cy.contains("პროფილი").should("be.visible").click()
        cy.get('h1').should("have.text","პერსონალური ინფორმაცია")
        









    })
})
