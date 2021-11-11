/// <reference types="cypress" />

describe("Verify radio buttons via WebdriverUniversity", () => {
    before(function() {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});
    })
    it("Check specific radio buttons", () => {
        //check the first element radio button:
        cy.get('#radio-buttons').find("[type='radio']").first().check();
        cy.wait(1500);

        cy.get('#radio-buttons').find("[type='radio']").eq(1).check();
    });

    it("Validate the state of specific button", () => {
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');

        cy.get("[value='lettuce']").check();
        cy.get("[value='lettuce']").should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');
    });
})