// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// <reference type="Cypress" />


// Custom command for clicking a link
Cypress.Commands.add("clickLink", (label) => {
    cy.get('a').contains(label).click()
})



    
//Custom command for log in

Cypress.Commands.add("loginapp",(username,password)=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get("input[placeholder='Username']").type(username)
    cy.get("input[placeholder='Password']").type(password)
    cy.get("button[type='submit']").click()
    
})



// This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })