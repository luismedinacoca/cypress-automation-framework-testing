# Lecture136 - FIND()

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
<ul class="pagination traversal-pagination" style="outline: orange dashed 2px !important; outline-offset: -1px !important;">
    <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
            <span class="sr-only">Previous</span>
        </a>
    </li>
    
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>

    <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span class="sr-only">Next</span>
        </a>
    </li>
</ul>
```

2. Assertion of elements from a list through find():
```javascript
cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7);
```

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("find() to retrieve DOM elements of a given selector", () => {
      cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7);
    });
});
```