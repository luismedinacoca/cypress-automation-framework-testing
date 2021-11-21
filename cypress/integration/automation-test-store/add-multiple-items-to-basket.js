/// <reference types="cypress" />

describe("add multiple items to basket", () => {
    before(function() {
        cy.fixture("products").then(function(data){
            globalThis.data = data;
        })
    })

    beforeEach(function () {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Hair Care").click();
    })
    
    it("Add specific item to basket", () => {
        globalThis.data.productName.forEach(function(element){
            cy.addProductsToBasket(element);
        })
    })
    
})