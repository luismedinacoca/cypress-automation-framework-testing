# Lecture142 - PARENT()

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
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <mark class="traversal-mark">sed do eiusmod tempor incididunt ut labore</mark> et dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat consequat.</p>
```

2. parent() assertion elements:
```javascript
cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,');
```

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("parent() To get parent DOM element of elements", () => {
      cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,');
    });
    });
});
```