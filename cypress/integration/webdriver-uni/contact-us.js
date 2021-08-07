/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type("Joe Francesco");
        cy.get('[name="last_name"]').type('Mastroopiero');
        cy.get('[name="email"]').type("joefran@mastropiero.com");
        cy.get('textarea.feedback-input').type("Text area will be completed in the future....");
        cy.get('[type="submit"]').click();
    });

    it.only("Should NOT be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type("Joe Francesco");
        cy.get('[name="last_name"]').type('Mastroopiero');
        cy.get('textarea.feedback-input').type("Text area will be completed in the future....");
        cy.get('[type="submit"]').click();
    });
})