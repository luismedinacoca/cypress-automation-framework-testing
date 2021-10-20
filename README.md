# Lecture134 - EQ()

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
    <li id="coffee" style="">Coffee</li>
    <li id="tea" style="">Tea</li>
    <li id="milk" style="">Milk</li>
    <li id="espresso" style="">Espresso</li>
    <li id="sugar" style="">Sugar</li>
</ul>
```

2. Select element from a list through eq():
```javascript
cy.get('.traversal-drinks-list > *').eq(NUMBER);
```
Remember index starts from "0" to "list length - 1".

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it.only("eq() to retrieve a specific element based on index", () => {
      cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk');
    });
});
```