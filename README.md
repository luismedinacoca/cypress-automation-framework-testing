# Lecture139 - NEXTALL()

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

2. NextAll() assertion elements:
```javascript
cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', 3);
```

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("nextAll() to get all of the next sibling DOM elements within elements", () => {
      cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', 3);
    });
});
```