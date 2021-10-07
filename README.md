# Lecture094 - SAME ORIGIN POLICY PART 1/2

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
│   │   file011.txt
│   │   ...
│   
└───integration
│   │   
│   └───automation-test-store
│   |   │   alias-invoke.js
│   |   │   ...
│   │   
│   └───other
│   |   │   same-origin-policy.js ***
│   │ 
│   └───webdriver-university
│       │   contact-us.js
│       │   ...
```

1. Trying to access to two different domains - cypress limitation:

```javascript
describe("Cypress web security", () => {
    it("Validate visiting two different domains", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.visit('https://automationteststore.com/');
    });

    it.only("Validate visiting two different domains via user actions", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
        cy.visit('https://automationteststore.com/');
    });
})
```
they failed!