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
    });

    it.only("Calculate Total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        //cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
            //invoke the text
            //cy.log($el.text());
        //})

        //alias to item price:
        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++){
                cy.log(itemPrice[i]);
                itemsPriceTotal += Number(itemPrice[i]);           
            }
            itemsTotal += itemsPriceTotal;
            cy.log('Non sale price item total: ' + itemsPriceTotal);
        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemPrice = $linkText.split('$');
        })
    });

})