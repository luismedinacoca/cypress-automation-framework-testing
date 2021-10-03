/// <reference types="cypress" />

describe("Alias and Invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('include', 'weed Condit');
    });

    it("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com/");
        //.thumbnail webelement as @productThumbnail  Alias
        cy.get('.thumbnail').as('productThumbnail');
        //verifying the length of @productThumbnail elements
        cy.get('@productThumbnail').should('have.length', 16);
        //verifying the element with attribute title and its value is 'Add to Cart'
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
    })

})