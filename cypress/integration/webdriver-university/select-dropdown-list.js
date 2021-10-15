/// <reference types="cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific value via select dropdown lists", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        cy.wait(1500);

        cy.get('#dropdowm-menu-1').select('c#');
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng');
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery');
    });
})