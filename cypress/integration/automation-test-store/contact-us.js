/// <reference types="cypress" />

describe("Test Contact Us from via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit('https://automationteststore.com');
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type('John McDowell');
        cy.get('#ContactUsFrm_email').type('johnmcdowell@example.com');
        cy.get('#ContactUsFrm_enquiry').type('Do you provide additional discount on bulk orders?');
        cy.get('.col-md-6 > .btn').click();
    });
})