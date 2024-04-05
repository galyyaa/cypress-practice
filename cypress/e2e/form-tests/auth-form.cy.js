/// <reference types="cypress" />
describe('example to-do app', () => {
    it("authorization invalid_creds 1", () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('input#username').type('tomsmith');
        cy.get('input#password').type('Password!!');
        cy.get('button[type="submit"').click();
        cy.get('div#flash').should('have.text', '\n Your password is invalid!\n ×\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    })
    it("authorization invalid_creds", () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('input#username').type('galya');
        cy.get('input#password').type('SuperSecretPassword!');
        cy.get('button[type="submit"').click();
        cy.get('div#flash').should('have.text', '\n Your password is invalid!\n ×\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');
    })
})

