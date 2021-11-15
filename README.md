# Lecture170 - CUSTOM COMMANDS - DOCUMENTATION & PRACTICAL EXAMPLES

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
│   │   examples.json   
│   │   userDetails.json    
│   
└───integration 
│   │   
│   └───automation-test-store
│   |   │   alias-invoke.js
│   |   │   contact-us.js
│   |   │   iterate-over-elements.js   *************
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
│   │   commands.js   *******
│   |   │   ...
```
1. since this link:
[Custom Commands | cypress documentation](https://docs.cypress.io/api/cypress-api/custom-commands#Syntax)

2. Modify fixtures/example.json which some data are taken from:
```javascript
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("selectProduct", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        // conditional assessment
        if($el.text().includes(productName)){
            cy.wrap($el).click();
        }
    });
})
```

3. Complete cypress Code:
```javascript
describe("Iterate over elements", () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // iterate in product list, getting index and element name:
            cy.log("Index " + index + ": " + $el.text());
        })
    });

    it("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Hair Care").click();

        /*
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // conditional assessment
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click();
            }
        }) */
        cy.selectProduct('Curls to straight Shampoo');
    });

    it("Add another specific product to basket", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Hair Care").click();
        cy.selectProduct('Seaweed Conditioner');
    });

    it("Add 'Eau Parfumee au The vert shampoo' product to basket", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Hair Care").click();
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    });
})
```