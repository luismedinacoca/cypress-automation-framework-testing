/// <reference types="cypress" />

describe("Verify radio buttons via WebdriverUniversity", () => {
    it("Check specific radio buttons", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        //check the first element radio button:
        cy.get('#radio-buttons').find("[type='radio']").first().check();
        cy.wait(1500);

        cy.get('#radio-buttons').find("[type='radio']").eq(1).check();
    });
})