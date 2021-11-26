# Lecture182 - SETTING UP A BASE URL

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
│   │   commands.js
│   |   │   ...
```
1. running from terminal after creating an env variable in order to overwrite it:
$ ./node_modules/.bin/cypress run --browser chrome --spec relativePath_webdriver_Contact-us/contact-us.js --env first_name=newName

2. modifiy cypres.json file adding baseUrl value:
```json
{
    "baseUrl": "http://webdriveruniversity.com",
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
describe("Verify checkboxes via WebdriverUniversity", () => {
    beforeEach( () => {
        cy.visit('/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});
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
cy.visit('/');
```