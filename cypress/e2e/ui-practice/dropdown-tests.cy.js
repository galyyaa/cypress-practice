/// <reference types="cypress" />
describe('dropdown tests', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dropdown') 
    })

    it("Text 'Please select an option' should be by default", () => {
        cy.get('select#dropdown option:selected').should('have.text', 'Please select an option');
    })  
    it("Data 'Option 2' is selected", () => {
        cy.get('select#dropdown').select('Option 2');
        cy.get('select#dropdown').should('have.value', '2')
    })   
})