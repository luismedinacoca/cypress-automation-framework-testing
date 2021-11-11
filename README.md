# Lecture163 - HOOKS - IMPROVING CHECKBOXES TEST

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
│   │   ...
│   
└───integration 
│   │   
│   └───automation-test-store
│   |   │   alias-invoke.js
│   |   │   ...
│   │   
│   └───other
│   |   │   hooks.js
│   |   │   same-origin-policy.js
│   │ 
│   └───webdriver-university
│       │   autocomplete-dropdown-list.js  
│       │   browser-navigation.js  
│       │   checkboxes.js         ********
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
```
1. since this link:
[Bundled Tools | cypress documentation](https://docs.cypress.io/guides/references/bundled-tools#Mocha)

[Writing and organizing test | Cypress Documentation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks)


2. Complete cypress Code:
```javascript
describe("Verify checkboxes via WebdriverUniversity", () => {
    beforeEach( () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});
    })
    it("Check and validate checkbox", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        //cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked');
    });

    it("Uncheck and validate checkbox", () => {
        cy.get(':nth-child(5) > input').as('option-3');
        cy.get('@option-3').uncheck().should('not.be.checked');
    });

    it("Check multiple checkboxes", () => {
        //check multiple checkboxes with  check([options*])
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked');        
    });
})
```