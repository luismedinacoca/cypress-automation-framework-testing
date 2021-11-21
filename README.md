# Lecture177 - CUSTOM COMMANDS & FIXTURES - WRAP UP

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
│   │   examples.json   
│   │   products.json    🕧  
│   │   userDetails.json    
│   
└───integration 
│   │   
│   └───automation-test-store
│   |   │   add-multiple-items-to-basket.js    🕧
│   |   │   alias-invoke.js
│   |   │   contact-us.js
│   |   │   iterate-over-elements.js   
│   |   │   ...
│   │   
│   └───other
│   |   │   hooks.js
│   |   │   same-origin-policy.js
│   │ 
│   └───webdriver-university
│       │   autocomplete-dropdown-list.js  
│       │   browser-navigation.js  
│       │   checkboxes.js         
│       │   contact-us.js
│       │   data-table.js
│       │   datepicker.js
│       │   file-upload.js
│       │   iframe.js  
│       │   js-alert.js
│       │   mouse-actions.js 
│       │   radio-buttons.js
│       │   select-dropdown-list.js
│       │   traversing-elements.js
│       │   ...
└───support
│   │   commands.js   🕧
│   |   │   ...
```
1. since this link:
[Custom Commands | cypress documentation](https://docs.cypress.io/api/cypress-api/custom-commands#Syntax)

2. Create fixtures/products.json with the following data:
```json
{
    "productName": [
        "Pantene Pro-V Conditioner, Classic Care",
        "Eau Parfumee au The Vert Shampoo",
        "Curls to straight Shampoo"
    ]
}
```
3. Modify support/commands.js file adding a new custom function:
```javascript
Cypress.Commands.add("addProductsToBasket", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text() === productName){
            cy.log($el.text());
            cy.get('.productcart').eq(index).click();
        }
    });
})
```

4. callback the addProductsToBasket from a test case as follows:

```javascript
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
```