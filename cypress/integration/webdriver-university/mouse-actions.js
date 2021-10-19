/// <reference types="cypress" />

describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit('http://webdriveruniversity.com');
        //cy.get('#actions').invoke('removeAttr', 'target').click({force:true});
        cy.get('#contact-us').as('contactUs').scrollIntoView().then(() => {
            const text = cy.get('@contactUs').find('h1');
            cy.log(text);
        });
        
        cy.wait(1000);

        cy.get('#button-clicks').as('buttons').scrollIntoView().then(() => {
            const text = cy.get('@buttons').find('h1');
            cy.log(text);
        });

        cy.wait(1000);

        cy.get('#page-object-model').as('pom').scrollIntoView().then(() => {
            const text = cy.get('@pom').find('h1');
            cy.log(text);
        });

        cy.wait(1000);

        cy.get('#dropdown-checkboxes-radiobuttons').as('dropdown').scrollIntoView().then(() => {
            const text = cy.get('@dropdown').find('h1');
            cy.log(text);
        });

        cy.wait(1000);

        cy.get('#actions').as('actions').scrollIntoView().then(() => {
            const text = cy.get('@actions').find('h1');
            cy.log(text);
        });
        
    });
})