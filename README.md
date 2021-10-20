# Lecture133 - CLOSEST

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
<div class="thumbnail">
    <h2>Badges</h2>
    <ul class="list-group">
        <li class="list-group-item badge-text">Today's Deals<span class="badge badge-light">5</span></li>
        <li class="list-group-item badge-text">All Products<span class="badge traversal-badge" style="">20</span></li>
    </ul>
</div>
```

2. Assertion to the closest ancestor:
```javascript
cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');
```

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("closest() to validate the closest ancestor DOM element", () => {
      cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');
    }); 
});
```