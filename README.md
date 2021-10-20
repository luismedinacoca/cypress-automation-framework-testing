# Lecture135 - FILTER()

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
<div class="btn-group btn-group-toggle" data-toggle="buttons" style="">
    <button type="button" class="btn btn-primary active" style="">Button-1</button>
    <button type="button" class="btn btn-primary" style="">Button-2</button>
    <button type="button" class="btn btn-primary" style="">Button-3</button>
    <button type="button" class="btn btn-primary" style="">Button-4</button>
</div>
```

2. Select element from a list through filter():
```javascript
cy.get('.btn-group-toggle > *').filter('.active');
```
Remember index starts from "0" to "list length - 1".

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("filter() to retrieve DOM elements that match a specific selector", () => {
      cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1')
    });
});
```