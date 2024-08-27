
//
//რეგისტრაციის გავლა უკვე რეგისტრირებული მონაცემებით.არ უნდა დასრულდეს წარმატებუთ. 
import userData from '../fixtures/example.json'

describe('registration', () => {
    it('login', () => {
        cy.visit ('https://testzootopia.loremipsum.ge/ka')
        

        cy.get('.menu-pop > .rprof').click()
        cy.get('.input-shablon > p > a').should("be.visible").click()
        cy.contains("რეგისტრაცია").should("be.visible")
        cy.login(userData.name, userData.id,  userData.email,userData.mob, userData.password, userData.password1)
        cy.get("label:nth-child(2) > svg:nth-child(1) > g:nth-child(1) > rect:nth-child(1)").click({force: true})
        cy.get('.regsub').click()
        cy.get('.input-div.alert > .alert > img').should("be.visible")
        
        



    })
})
