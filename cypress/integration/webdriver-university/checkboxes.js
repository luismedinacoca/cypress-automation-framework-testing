/// <reference types="cypress" />

describe("Verify checkboxes via WebdriverUniversity", () => {
    it("Check and validate checkbox", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

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

    it.only("Uncheck and validate checkbox", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        cy.get(':nth-child(5) > input').as('option-3');
        cy.get('@option-3').uncheck().should('not.be.checked');
    });
})