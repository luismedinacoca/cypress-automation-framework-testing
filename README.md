# Lecture143 - PARENTS()

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
<div class="traversal-cite-text">
  <blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <footer>Platea dictumst quisque sagittis purus sit amet <cite class="traversal-cite">volutpat consequat.</cite></footer>
  </blockquote>
</div>
```

2. parents() with tag assertion:
```javascript
cy.get('.traversal-cite').parents().should('match', 'blockquote');
```

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("parents() to get parents DOM element of elements", () => {
      cy.get('.traversal-cite').parents().should('match', 'blockquote');
    });
});
```