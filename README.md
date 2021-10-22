# Lecture138 - LAST()

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
<table class="table table-light traversal-table" style="">
    <thead>
        <tr class="bg-primary">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
        </tr>
    </thead>

    <tbody style="">
        <tr class="bg-info" style="">
            <th scope="row">1</th>
            <td style="">Andy</td>
            <td style="">Otto</td>
        </tr>
        <tr class="bg-info" style="">
            <th scope="row">2</th>
            <td style="">Jacob</td>
            <td style="">Jones</td>
        </tr>
        <tr class="bg-info" style="">
            <th scope="row">3</th>
            <td style="">Larry</td>
            <td style="">Scott</td>
        </tr>
    </tbody>
</table>
```

2. Last assertion element with last():
```javascript
cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott');
```

3. Complete Code:
```javascript
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("first() to retrieve the first DOM element within elements ", () => {
      cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott');
    });
});
```