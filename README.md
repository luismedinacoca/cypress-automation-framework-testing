# Lecture161 - HOOKS - DOCUMENTATION AND PRACTICAL EXAMPLE

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
│   |   │   hooks.js                 ********
│   |   │   same-origin-policy.js
│   │ 
│   └───webdriver-university
│       │   autocomplete-dropdown-list.js  
│       │   browser-navigation.js  
│       │   checkboxes.js
│       │   contact-us.js
│       │   data-table.js
│       │   datepicker.js
│       │   file-upload.js
│       │   iframe.js  
│       │   js-alert.js
│       │   mouse-actions.js 
│       │   radio-buttons.js
│       │   select-dropdown-list.js
│       │   traversing-elements.js
│       │   ...
```
1. since this link:
[Bundled Tools | cypress documentation](https://docs.cypress.io/guides/references/bundled-tools#Mocha)

[Writing and organizing test | Cypress Documentation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks)


2. Complete cypress Code:
```javascript
describe('Hooks', () => {
  before(() => {
    cy.log("runs once before all tests in the block");
  })
  
  beforeEach(() => {
    cy.log("runs before each test in the block"); 
  })
  
  afterEach(() => {
    cy.log("runs after each test in the block");
  })
  
  after(() => {
    cy.log("runs once after all tests in the block");
  })

  it("Example test 1", () => {
    cy.log("Example test 1")
  })

  it("Example test 2", () => {
    cy.log("Example test 2")
  })

  it("Example test 3", () => {
    cy.log("Example test 3")
  })
})
```