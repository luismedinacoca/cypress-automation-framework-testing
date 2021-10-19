# Lecture127 - SCROLL INTO VIEW

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
│   |   │   same-origin-policy.js
│   │ 
│   └───webdriver-university
│       │   autocomplete-dropdown-list.js  
│       │   browser-navigation.js  
│       │   checkboxes.js
│       │   contact-us.js
│       │   iframe.js  
│       │   js-alert.js
│       │   mouse-actions.js ****  
│       │   radio-buttons.js
│       │   select-dropdown-list.js
│       │   ...
```
1. Scroll each option:
```javascript
describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit('http://webdriveruniversity.com');
        //cy.get('#actions').invoke('removeAttr', 'target').click({force:true});
        cy.get('#contact-us').as('contactUs').scrollIntoView().then(() => {
            const text = cy.get('@contactUs').find('h1');
            cy.log(text);
        });
        
        cy.wait(1000);

        cy.get('#button-clicks').as('buttons').scrollIntoView().then(() => {
            const text = cy.get('@buttons').find('h1');
            cy.log(text);
        });

        cy.wait(1000);

        cy.get('#page-object-model').as('pom').scrollIntoView().then(() => {
            const text = cy.get('@pom').find('h1');
            cy.log(text);
        });

        cy.wait(1000);

        cy.get('#dropdown-checkboxes-radiobuttons').as('dropdown').scrollIntoView().then(() => {
            const text = cy.get('@dropdown').find('h1');
            cy.log(text);
        });

        cy.wait(1000);

        cy.get('#actions').as('actions').scrollIntoView().then(() => {
            const text = cy.get('@actions').find('h1');
            cy.log(text);
        });
        
    });
})
```