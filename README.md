# Lecture108 - HANDLING ALERT WITH STUB

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

1. handling alert with STUB:
```javascript
const stub = cy.stub();
cy.on('window:confirm', stub);
```

2. Assertion with stub:
```javascript
cy.get('#button4').click().then( () => {
    expect(stub.getCall(0)).to.be.calledWith('Press a button!');
})
```

3. Whole code with alerts:
```javascript
it("Validate js confirm alert box using a stub", () => {
    cy.visit('https://webdriveruniversity.com/');
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true});

    const stub = cy.stub();
    cy.on('window:confirm', stub);

    cy.get('#button4').click().then( () => {
        expect(stub.getCall(0)).to.be.calledWith('Press a button!');
    }).then( () => {
        return true;
    }).then( () => {
        cy.get('#confirm-alert-text').contains('You pressed OK!');          
    });
});
```