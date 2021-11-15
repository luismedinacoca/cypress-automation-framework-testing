# Lecture167 - FIXTURES & DATA DRIVEN TESTS

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
│   │   examples    *******
│   
└───integration 
│   │   
│   └───automation-test-store
│   |   │   alias-invoke.js
│   |   │   ...
│   │   
│   └───other
│   |   │   hooks.js
│   |   │   same-origin-policy.js
│   │ 
│   └───webdriver-university
│       │   autocomplete-dropdown-list.js  
│       │   browser-navigation.js  
│       │   checkboxes.js         
│       │   contact-us.js       *************
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
[Fixture | cypress documentation](https://docs.cypress.io/api/commands/fixture#Syntax)

2. Modify fixtures/example.json which some data are taken from:
```json
{
  "name": "Using fixtures to represent data",
  "email": "bruno_ramses@webdriveruniversity.com",
  "body": "Fixtures are a great way to mock data for responses to routes",
  "first_name": "Bruno",
  "last_name": "Ramses"
}
```

3. Complete cypress Code:
```javascript
describe("Test Contact Us form via WebdriverUni", () => {
before(function(){
    cy.fixture('example').then(function(data){
        //this.data = data;
        globalThis.data = data;
    })
})

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.url().should('include', 'contactus');
        cy.title().should('include', 'WebDriver | Contact Us');

        //using fixture data for email, name & lastname
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email);
        
        cy.get('textarea.feedback-input').type("Text area will be completed in the future....");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    it("Should NOT be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.url().should('include', '-Us/contact');
        cy.title().should('include', 'Contact Us');

        //using fixture data for name & lastname
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);

        cy.get('textarea.feedback-input').type("Text area will be completed in the future....");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
        cy.get('body').contains('Error: Invalid email address');
    });
})
```