# Lecture100 - ALERT AND CONFIRM ALERT

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
│       │   browser-navigation.js  
│       │   js-alert.js  ****
│       │   ...
```

1. handling alert with 'OK' button only:
```javascript
cy.on('window:alert', (str) => {
	//assertion with the text:
    expect(str).to.equal('I am an alert box!');
});
```

2. Handling alert with 'Cancel | OK' buttons:
```javascript
cy.on('window:confirm', () => {
    return true;  //'true' for 'OK' and 'false' for 'Cancel'
});
cy.get('#confirm-alert-text').contains('You pressed OK!');
```

```javascript
cy.on('window:confirm', () => {
    return false;  //'true' for 'OK' and 'false' for 'Cancel'
});
cy.get('#confirm-alert-text').contains('You pressed Cancel!');
```

4. Whole code with alerts:
```javascript
    it("Confirm JS alert contains the correct text", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
        
        cy.get('#button1').click();

        //validate or assert the alert text:
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        });
    });

    it("Validate js confirm alert box works correctly when clicking ok", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
        
        cy.get('#button4').click();

        //validate or assert the alert text:
        cy.on('window:confirm', () => {
            return true;  //'true' for 'OK' and 'false' for 'Cancel'
        });
        //assertion
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });

    it("Validate js confirm alert box works correctly when clicking ok", () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});
        
        cy.get('#button4').click();

        //validate or assert the alert text:
        cy.on('window:confirm', () => {
            return false;  //'true' for 'OK' and 'false' for 'Cancel'
        });
        //assertion
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
	});
```