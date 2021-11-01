# Lecture145 - PREVALL()

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
<ul class="traversal-job-list">
  <li id="types-of-jobs" class="list-header">Types of Jobs</li>
  <ul class="menu">
    <li>Finance</li>
    <li>Technology</li>
    <li class="sales">Sales</li>
  </ul>
</ul>
```

2. prevAll() with element assertion:
```javascript
cy.get('.sales').prevAll().should('have.length', 2);
```

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("prevAll() to get all previous sibling DOM elements within elements", () => {
      cy.get('.sales').prevAll().should('have.length', 2);
    });
});
```