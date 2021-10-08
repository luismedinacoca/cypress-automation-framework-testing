# Lecture099 - BACK, FORWARD, RELOAD

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
│   │   
│   └───other
│   |   │   same-origin-policy.js
│   │ 
│   └───webdriver-university
│       │   contact-us.js
│       │   browser-navigation.js  ****
│       │   ...
```

1. navigate back page:
```javascript
	cy.go('back');
```

2. navigate foward page:
```javascript
	cy.go('forward');
```

3. reload page:
```javascript
	cy.reload();
	cy.reload(true) //reload without using cache
```

4. Whole code with many back, reload and fowrad:
```javascript
it("Confirm links redirect to hte correct pages", () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});

	//validate contact us page link
    cy.url().should('include', 'Contact-Us/contactus');

    cy.go('back');
    cy.url().should('include', 'https://webdriveruniversity.com/');

    //cy.reload(true); //reload without using cache
    cy.reload();

    cy.go('forward');
    cy.url().should('include', 'Contact-Us/contactus');
    cy.go('back');

    cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true});
    cy.url().should('include', 'Login-Portal');
    cy.go('back');

    cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true});
    cy.url().should('include', '/To-Do-List');
    cy.go('back');
    })
```