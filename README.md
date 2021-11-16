# Lecture174 - USING CUSTOM COMMANDS TO FURTHER IMPROVE OUR FRAMEWORK

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
│   │   examples.json   
│   │   userDetails.json    
│   
└───integration 
│   │   
│   └───automation-test-store
│   |   │   alias-invoke.js
│   |   │   contact-us.js
│   |   │   iterate-over-elements.js   
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
│       │   contact-us.js    *************     
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
└───support
│   │   commands.js   *******
│   |   │   ...
```
1. since this link:
[Custom Commands | cypress documentation](https://docs.cypress.io/api/cypress-api/custom-commands#Syntax)

2. Modify fixtures/example.json which some data are taken from:
```javascript
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("selectProduct", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        // conditional assessment
        if($el.text().includes(productName)){
            cy.wrap($el).click();
        }
    });
});

Cypress.Commands.add("webdriverUni_ContactForm_submission", (firstname, lastname, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstname);
    cy.get('[name="last_name"]').type(lastname);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate);
});
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

        /*
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type("Text area will be completed in the future....");
        cy.get('[type="submit"]').click();
        //assertion for the title getting the text:
        cy.get('h1').should('have.text', 'Thank You for your Message!');*/
        cy.webdriverUni_ContactForm_submission(data.first_name, data.last_name, data.email, "Text area will be completed in the future....", "h1", "Thank You for your Message!");
    });

    it("Should NOT be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.url().should('include', '-Us/contact');
        cy.title().should('include', 'Contact Us');

        /*
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('textarea.feedback-input').type("Text area will be completed in the future....");
        cy.get('[type="submit"]').click();
        //adding assertion with contains method:
        cy.get('body').contains('Error: all fields are required');*/
        cy.webdriverUni_ContactForm_submission(data.first_name, data.last_name, " ", "Text area will be completed in the future....", "body", "Error: Invalid email address");
    });
})
```