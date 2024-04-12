/// <reference types="cypress" />
describe('checkbox tests', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes') 
    })
   
    it("Second checkbox is on by default -> Uncheck second checkbox -> Two checkboxes should be unchecked", () => {
        cy.get('[type="checkbox"]').eq(1).should('be.checked');
        cy.get('[type="checkbox"]').eq(1).uncheck();
        cy.get('[type="checkbox"]').eq(0).should('not.be.checked');
        cy.get('[type="checkbox"]').eq(1).should('not.be.checked');
    })    

    it("First checkbox is checked -> Two checkboxes should be checked", () => {
        cy.get('[type="checkbox"]').eq(0).check().should('be.checked');
        cy.get('[type="checkbox"]').eq(0).should('be.checked');
        cy.get('[type="checkbox"]').eq(1).should('be.checked');
    })
})