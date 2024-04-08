// Тести 1-5

/// <reference types="cypress" />
describe('atribute href from social links', () => {
    it("Get atribute href from Facebook", () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            },
        });
        cy.get('a.socials_link').eq(0).invoke('attr', 'href').should('contain', 'https://www.facebook.com/Hillel.IT.School');
    })

    it("Check atribute href from Telegram", () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            },
        });
        cy.get('a.socials_link').eq(1).invoke('attr', 'href').should('contain', 'https://t.me/ithillel_kyiv');
    })

    it("Check atribute href from YouTube", () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            },
        });
        cy.get('a.socials_link').eq(2).invoke('attr', 'href').should('contain', 'https://www.youtube.com/user/HillelITSchool');
    })

    it("Check atribute href from Instagram", () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            },
        });
        cy.get('a.socials_link').eq(3).invoke('attr', 'href').should('contain', 'https://www.instagram.com/hillel_itschool/');
    })

    it("Check atribute href from Linkedin", () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            },
        });
        cy.get('a.socials_link').eq(4).invoke('attr', 'href').should('contain', 'https://www.linkedin.com/school/ithillel/');
    })
})

// Тест 6

/// <reference types="cypress" />
describe('login form test', () => {
    it("After click on 'Sign in' button should opens login form", () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            },
        });
        cy.get('button').contains('Sign In').click();
        cy.get('h4.modal-title').should('be.visible')
    })
})

// Тест 7

/// <reference types="cypress" />
describe('registration form test', () => {
    it("After click on 'Sign up' button should opens registration form", () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            },
        });
        cy.get('button').contains('Sign up').click();
        cy.get('h4.modal-title').should('be.visible')
    })
})