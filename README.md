# Lecture146 - PREVUNTIL()

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
│       │   data-table.js  ***
│       │   iframe.js  
│       │   js-alert.js
│       │   mouse-actions.js 
│       │   radio-buttons.js
│       │   select-dropdown-list.js
│       │   traversing-elements.js
│       │   ...
```
1. since html code:
```html
<div class="thumbnail" id="thumbnail-1">
  <table id="t01" style="width:100%">
    <tbody>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th> 
        <th>Age</th>
      </tr>
      <tr>
        <td>John</td>
        <td>Smith</td>
        <td>45</td>
      </tr>
      <tr>
        <td>Jemma</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Michael</td>
        <td>Doe</td>
        <td>20</td>
      </tr>
    </tbody>
  </table>
  
  <br>

  <table id="t02">
    <tbody>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th> 
        <th>Age</th>
      </tr>
      <tr>
        <td>Jason</td>
        <td>Jones</td>
        <td>27</td>
      </tr>
      <tr>
        <td>Sarah</td>
        <td>Jackson</td>
        <td>56</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>Woods</td>
        <td>80</td>
      </tr>
    </tbody>
  </table>
</div>
```

2. Complete Code:
```javascript
describe("Handling data via webdriveruniversity", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
      it("Calculate and assert the total age of all users", () => {
        var userDetails = [];
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            let numb = 0;
            for(i = 0; i < userDetails.length; i++){
                if(Number(userDetails[i])){
                    numb += Number(userDetails[i]);
                }
            }
            cy.log("Found total age: " + numb);
            expect(numb).to.eq(322);
        });
      });
  })
```