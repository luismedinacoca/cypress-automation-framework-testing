# Lecture093 - HANDLING MULTIPLE BROWSER TABS

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
│   │   file011.txt
│   │   ...
│   
└───integration
│   │   
│   └───automation-test-store
│   |   │   alias-invoke.js
│   |   │   ...
│   │   │   
│   └───webdriver-university
│       │   contact-us.js  ***
│       │   ...
```

1. having the following html code and due to target attribute with _target value, it opens in a new tab:
```html
<div class="col-sm-12 col-lg-8 col-md-8">
	<a href="Contact-Us/contactus.html" target="_blank" id="contact-us">
		<div class="thumbnail">
			<div class="section-title">
				<h1>CONTACT US</h1>
			</div>

			<div class="caption">
				.....
			</div>
		</div>
	</a>
</div>
```

2. Dealing with multiple browser tabs:
```javascript
it("Should be able to submit a successful submission via contact us form", () => {
    //cypress code
    cy.visit('http://webdriveruniversity.com');
    cy.get('#contact-us').click({force:true});

	//**********FAILED FROM THIS PART => NEW TAB IS OPEN*******************
    //cy.document for <head> properties
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');

    //cy.url()
    cy.url().should('include', 'contactus');

    //cy.title:
    cy.title().should('include', 'WebDriver | Contact Us');

    cy.get('[name="first_name"]').type("Joe Francesco");
    cy.get('[name="last_name"]').type('Mastropiero');
    cy.get('[name="email"]').type("joefran@mastropiero.com");
    cy.get('textarea.feedback-input').type("Text area will be completed in the future....");
    cy.get('[type="submit"]').click();
    //assertion for the title getting the text:
    cy.get('h1').should('have.text', 'Thank You for your Message!');
});
```