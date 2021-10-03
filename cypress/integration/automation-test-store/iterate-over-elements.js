/// <reference types="cypress" />

describe("Iterate over elements", () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // iterate in product list, getting index and element name:
            cy.log("Index " + index + ": " + $el.text());
        })
    });

    it.only("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // conditional assessment
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click();
            }
        })
    });
})