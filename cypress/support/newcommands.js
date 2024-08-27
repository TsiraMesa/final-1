
Cypress.Commands.add("login", (name, id, mob, password, password1) => {
    
    let random = Math.floor(Math.random() * 1000)
  



    cy.get(':nth-child(1) > .ismile').type(name)
    cy.get('.ipir').type(id + random)
    //cy.get(':nth-child(2) > .imail').type(random + email+random)
    cy.get(':nth-child(4) > .itel').type(mob + random)
    cy.get(':nth-child(5) > .ipass').type(password + random)
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(password1 + random)



})
Cypress.Commands.add("login2", (email, password) => {
    cy.get(':nth-child(5) > .imail').type(email)
    cy.get('.ipass').type(password)


})