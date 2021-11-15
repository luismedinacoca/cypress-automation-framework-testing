# Lecture168 - ALIAS & FIXTURES

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
│   │   examples.json   
│   │   userDetails.json    *******
│   
└───integration 
│   │   
│   └───automation-test-store
│   |   │   alias-invoke.js
│   |   │   contact-us.js   *************
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
[Fixture | cypress documentation](https://docs.cypress.io/api/commands/fixture#Syntax)

2. Modify fixtures/example.json which some data are taken from:
```json
{
    "email": "bruno_ramses@automationteststore.com",
    "first_name": "bruno"
}
```

3. Complete cypress Code:
```javascript
describe("Test Contact Us from via Automation Test Store", () => {
    before(function(){
        cy.fixture('userDetails').as('user');
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href$='contact']").click().then(function(linktext){
            cy.log(">>>> Clicked on link using text: " + linktext.text());
        });

        //alias & fixtures
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
        
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('Do you provide additional discount on bulk orders?');
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        cy.log("Test has completed");
    });
})
```