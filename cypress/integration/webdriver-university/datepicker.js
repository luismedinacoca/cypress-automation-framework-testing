/// <reference types="cypress" />

describe("Test Datepicker via webdriveruniversity", () => {
    it("Select date from the datepicker", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true});
        cy.get('#datepicker').click();
        /**
        let date = new Date();
        date.setDate(date.getDate());
        cy.log(date.getDate());

        date.setDate(date.getDate() + 6);
        cy.log(date.getDate());
        */

        var date = new Date();
        date.setDate(date.getDate() + 100);

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthAndYear(){
            cy.get(".datepicker-dropdown").find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click();
                    cy.log("Future year to select: " + futureYear);
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get(".datepicker-dropdown").find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click();
                        cy.log("Future month to select: " + futureMonth);
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay(){
            cy.get("[class='day']").contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();
    });
})