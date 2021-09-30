/// <reference types="cypress" />

describe("Verifying cariables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        //cypress code
        cy.visit("https://automationteststore.com");
        //for variables this approach is not recommended:

        //the following code will pass:
        // const makeupLink = cy.get("a[href*='category&path=']").contains("Makeup"); 
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='category&path=']").contains("Skincare");  
        // skincareLink.click();

        //the following code fails:
        // makeupLink.click();
        // skincareLink.click();

        //recommended cypress approach:

        cy.get("a[href*='category&path=']").contains("Skincare");
        cy.get("a[href*='category&path=']").contains("Makeup"); 
    });

    it.only("Navigating to specific product pages", () => {
        //cypress code
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Makeup").click(); 

        //this code will fail => declaring variable or const
        //const header = cy.get("h1 .maintext");
        //cy.log(header);
        //cy.log(header.text());

        //using promises
        cy.get("h1 .maintext").then(($headerText) => {
            //variable or const declaration:
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq('Makeup');
        })
    });
})