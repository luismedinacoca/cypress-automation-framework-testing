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

    it("I should be able to drag and drop a draggable item", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#actions').invoke('removeAttr', 'target').click({force:true});

        cy.get('#draggable').trigger('mousedown', {which: 1});

        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
    });

    it("I should be able to perfome a double mouse click", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#actions').invoke('removeAttr', 'target').click({force:true});

        cy.get('#double-click').scrollIntoView();
        cy.wait(1000);
        cy.get('#double-click').dblclick();
    });

    it.only("I should be able to hold down the left mouse click button on a given item", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#actions').invoke('removeAttr', 'target').click({force:true});

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
        });
    });
})