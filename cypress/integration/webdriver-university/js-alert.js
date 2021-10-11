/// <reference types="cypress" />

describe("Handle JS alerts", () => {
    it("Confirm JS alert contains the correct text", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
        
        cy.get('#button1').click();

        //validate or assert the alert text:
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        });
    });

    it("Validate js confirm alert box works correctly when clicking ok", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
        
        cy.get('#button1').click();

        //validate or assert the alert text:
        cy.on('window:confirm', () => {
            return true;  //'true' for 'OK' and 'false' for 'Cancel'
        });
        //assertion
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });

    it("Validate js confirm alert box works correctly when clicking cancel", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
        
        cy.get('#button4').click();

        //validate or assert the alert text:
        cy.on('window:confirm', () => {
            return false;  //'true' for 'OK' and 'false' for 'Cancel'
        });
        //assertion
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    });

    it.only("Validate js confirm alert box using a stub", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});

        const stub = cy.stub();
        cy.on('window:confirm', stub);

        cy.get('#button4').click().then( () => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        }).then( () => {
            return true;
        }).then( () => {
            cy.get('#confirm-alert-text').contains('You pressed OK!');          
        });
    });
})