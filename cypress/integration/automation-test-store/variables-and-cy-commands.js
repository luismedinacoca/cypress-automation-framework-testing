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

        //recommended approach:

        cy.get("a[href*='category&path=']").contains("Skincare");
        cy.get("a[href*='category&path=']").contains("Makeup"); 
    });
})