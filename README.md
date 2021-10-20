# Lecture132 - CHILDREN

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
<nav aria-label="breadcrumb">
    <ol class="breadcrumb traversal-breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#" style="">About Us</a></li>
        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
    </ol>
</nav>
```

2. Click on one children:
```javascript
cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us');
```

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })
    it.only("children() to get the children of DOM elements", () => {
      cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us');
    });
});
```