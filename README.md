# Lecture183 - DYNAMIC URLS

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

1. running from terminal after creating an env variable in order to overwrite it:
$ ./node_modules/.bin/cypress run --browser chrome --spec relativePath_webdriver_Contact-us/contact-us.js --env webdriveruni_homepage=newName

2. modifiy cypres.json file adding baseUrl value:
```json
{
    "baseUrl": "http://webdriveruniversity.com",
    "chromeWebSecurity": false,
    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 30000,
    "ignoreTestFiles": "**/other/*",
    "env":{
        "webdriveruni_homepage": "http://webdriveruniversity.com",
        "first_name" : "Sarah"
    }
}
```

3. modify contact-us.js from webdriveruniversity
```javascript
/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(function(){
        cy.fixture('example').then(function(data){
            globalThis.data = data;
        })
    });

    beforeEach(function() {
        cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.url().should('include', 'contactus');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.webdriverUni_ContactForm_submission(Cypress.env("first_name"), data.last_name, data.email, "Text area will be completed in the future....", "h1", "Thank You for your Message!");
    });

    it("Should NOT be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.url().should('include', '-Us/contact');
        cy.title().should('include', 'Contact Us');
        cy.webdriverUni_ContactForm_submission(data.first_name, data.last_name, " ", "Text area will be completed in the future....", "body", "Error: Invalid email address");
    });
})
```

4. changing are exactly on:
```javascript
cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
```