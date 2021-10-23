# Lecture141 - NOT()

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
<<div class="traversal-button-states">
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning disabled">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-info">Alert</button>
</div>
```

2. not() assertion elements:
```javascript
cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled');
```

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("not() to remove DOM element(s) from the set of elements", () => {
      cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled');
    });
});
```