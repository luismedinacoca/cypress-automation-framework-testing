# Lecture162 - HOOKS - IMPROVING EXISTENT TEST

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
│       │   checkboxes.js
│       │   contact-us.js
│       │   data-table.js
│       │   datepicker.js
│       │   file-upload.js
│       │   iframe.js  
│       │   js-alert.js
│       │   mouse-actions.js 
│       │   radio-buttons.js         ********
│       │   select-dropdown-list.js
│       │   traversing-elements.js
│       │   ...
```
1. since this link:
[Bundled Tools | cypress documentation](https://docs.cypress.io/guides/references/bundled-tools#Mocha)

[Writing and organizing test | Cypress Documentation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks)


2. Complete cypress Code:
```javascript
describe("Verify radio buttons via WebdriverUniversity", () => {
    before(function() {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});
    })
    it("Check specific radio buttons", () => {
        //check the first element radio button:
        cy.get('#radio-buttons').find("[type='radio']").first().check();
        cy.wait(1500);

        cy.get('#radio-buttons').find("[type='radio']").eq(1).check();
    });

    it("Validate the state of specific button", () => {
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');

        cy.get("[value='lettuce']").check();
        cy.get("[value='lettuce']").should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');
    });
})
```