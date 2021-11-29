# Lecture184 - DYNAMIC URLs & CUSTOM COMMANDS

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
│   │   examples.json   
│   │   products.json      
│   │   userDetails.json    
│   
└───integration 
│   │   
│   └───automation-test-store
│   |   │   add-multiple-items-to-basket.js
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
│       │   checkboxes.js      🕧         
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

1. running from terminal after creating an env variable in order to overwrite it:
$ ./node_modules/.bin/cypress run --browser chrome --spec relativePath_webdriver_Contact-us/contact-us.js --env webdriveruni_homepage=newName

2. modifiy commands.json file adding new function:
```javascript
Cypress.Commands.add("navigateTo_Webdriveruniversity_Homepage", () => {
    cy.visit("/");
});

Cypress.Commands.add("navigateTo_Webdriveruniversity_Checkbox_Ppage", () => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html");
});
```

3. modify checkboxes.js in beforeEach method:
```javascript
/// <reference types="cypress" />

describe("Verify checkboxes via WebdriverUniversity", () => {
    beforeEach( () => {
        cy.navigateTo_Webdriveruniversity_Checkbox_Page();
    })
    it("Check and validate checkbox", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check().should('be.checked');
    });

    it("Uncheck and validate checkbox", () => {
        cy.get(':nth-child(5) > input').as('option-3');
        cy.get('@option-3').uncheck().should('not.be.checked');
    });

    it("Check multiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked');        
    });
})
```

4. changing are exactly on:
```javascript
cy.navigateTo_Webdriveruniversity_Checkbox_Page();
```