/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        //cy.document for <head> properties
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        //cy.title:
        cy.title().should('include', 'WebDriver | Contact Us');

        cy.get('[name="first_name"]').type("Joe Francesco");
        cy.get('[name="last_name"]').type('Mastropiero');
        cy.get('[name="email"]').type("joefran@mastropiero.com");
        cy.get('textarea.feedback-input').type("Text area will be completed in the future....");
        cy.get('[type="submit"]').click();
        //assertion for the title getting the text:
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    it("Should NOT be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        //cy.document for <head> properties
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        //cy.title:
        cy.title().should('include', 'Contact Us');

        cy.get('[name="first_name"]').type("Joe Francesco");
        cy.get('[name="last_name"]').type('Mastropiero');
        cy.get('textarea.feedback-input').type("Text area will be completed in the future....");
        cy.get('[type="submit"]').click();
        //adding assertion with contains method:
        cy.get('body').contains('Error: all fields are required');
        cy.get('body').contains('Error: Invalid email address');
    });
})