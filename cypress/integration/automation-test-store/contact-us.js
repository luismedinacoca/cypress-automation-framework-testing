/// <reference types="cypress" />

describe("Test Contact Us from via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit("https://automationteststore.com");
        //instead of having a selector related to classes which can change...
        cy.get("a[href$='contact']").click();
        cy.get('#ContactUsFrm_first_name').type('John McDowell');
        cy.get('#ContactUsFrm_email').type('johnmcdowell@example.com');
        //assertion relating an attribute for email:
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('Do you provide additional discount on bulk orders?');
        cy.get("button[title='Submit']").click();
        //assertion from the text:
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        //non cypress commands:
        cy.log("Test has completed");
    });
})