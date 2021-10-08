/// <reference types="cypress" />

describe("Validate webdriveruniversity homepage links", () => {
    it("Confirm links redirect to hte correct pages", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
        //validate contact us page link
        cy.url().should('include', 'Contact-Us/contactus');

        cy.go('back');
        cy.url().should('include', 'https://webdriveruniversity.com/');

        //cy.reload(true); //reload without using cache
        cy.reload();

        cy.go('forward');
        cy.url().should('include', 'Contact-Us/contactus');
        cy.go('back');

        cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', 'Login-Portal');
        cy.go('back');

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', '/To-Do-List');
        cy.go('back');       

    });
})