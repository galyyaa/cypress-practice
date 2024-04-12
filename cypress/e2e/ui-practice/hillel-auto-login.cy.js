/// <reference types="cypress" />
import userData from '../../fixtures/credentials.json'

describe('using fixtures', () => {

    it("Sign in with data from fixtures", () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            },
        });
        cy.contains('Sign In').click();
        cy.get('input#signinEmail').type(userData.email);
        cy.get('input#signinPassword').type(userData.password);
        cy.contains('Login').click();
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage')
    })
})