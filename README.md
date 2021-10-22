# Lecture140 - NEXTUNTIL()

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
│       │   mouse-actions.js 
│       │   radio-buttons.js
│       │   select-dropdown-list.js
│       │   traversing-elements.js ***
│       │   ...
```
1. since html code:
```html
<ul class="traversal-drinks-list">
    <li id="coffee">Coffee</li>
    <li id="tea">Tea</li>
    <li id="milk">Milk</li>
    <li id="espresso">Espresso</li>
    <li id="sugar">Sugar</li>
</ul>
```

2. nextUntil() assertion elements:
```javascript
cy.get('#coffee').nextUntil('#espresso');
```

https://docs.cypress.io/api/commands/nextuntil#Syntax

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
      cy.get('#coffee').nextUntil('#espresso');
    });
});
```