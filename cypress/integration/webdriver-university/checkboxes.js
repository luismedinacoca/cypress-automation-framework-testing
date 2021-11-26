/// <reference types="cypress" />

describe("Verify checkboxes via WebdriverUniversity", () => {
    beforeEach( () => {
        cy.navigateTo_Webdriveruniversity_Checkbox_Ppage();
    })
    it("Check and validate checkbox", () => {
        //check the option 1
        //cy.get('#checkboxes > :nth-child(1) > input').check();

        //check and verify option 1 is checked
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');

        //check and verify option 1 is not checked  > which failed
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('not.be.checked');

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        //cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked');
    });

    it("Uncheck and validate checkbox", () => {
        cy.get(':nth-child(5) > input').as('option-3');
        cy.get('@option-3').uncheck().should('not.be.checked');
    });

    it("Check multiple checkboxes", () => {
        //check multiple checkboxes with  check([options*])
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked');        
    });
})