/// <reference types="cypress" />
describe('example to-do app', () => {
    it("authorization test 1", () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('input#username').type('tomsmith');
        cy.get('input#password').type('Password!!');
        cy.get('button[type="submit"').click();
        cy.get('h2').should('have.text', ' Secure Area');
    })
    it("authorization test 2", () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('input#username').type('galya');
        cy.get('input#password').type('SuperSecretPassword!');
        cy.get('button[type="submit"').click();
        cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');
    })
})

