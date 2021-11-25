# Lecture181 - ENVIRONMENT VARIABLES

```
cypress
│   README.md
|   cypress.json   🕧
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
│       │   checkboxes.js         
│       │   contact-us.js      🕧
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
│   │   commands.js
│   |   │   ...
```
1. running from terminal after creating an env variable:
$ ./node_modules/.bin/cypress run —browser chrome —spec relativePath_webdriver_Contact-us/contact-us.js —env first_name=newName

2. modifiy cypres.json file:
```json
{
    "chromeWebSecurity": false,
    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 30000,
    "ignoreTestFiles": "**/other/*",
    "env":{
        "first_name" : "Sarah"
    }
}
```

3. modify contact-us .js from webdriveruniversity
```javascript
/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
before(function(){
    cy.fixture('example').then(function(data){
        globalThis.data = data;
    })
})

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.url().should('include', 'contactus');
        cy.title().should('include', 'WebDriver | Contact Us');

        cy.webdriverUni_ContactForm_submission(Cypress.env("first_name"), data.last_name, data.email, "Text area will be completed in the future....", "h1", "Thank You for your Message!");
    })
})
```

4. changing areexactly on:
```javascript
cy.webdriverUni_ContactForm_submission(Cypress.env("first_name"), data.last_name, data.email, "Text area will be completed in the future....", "h1", "Thank You for your Message!");
```