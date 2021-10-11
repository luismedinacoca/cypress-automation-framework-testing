# Lecture112 - HANDLING CHECKBOXES

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
│       │   js-alert.js  
│       │   iframe.js  
│       │   checkboxes.js  ****
│       │   ...
```

1. check a checkbox:
```javascript
cy.get('#checkboxes > :nth-child(1) > input').check();
```

2. check a checkbox and verify whether is checked:
```javascript
cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
```

3. check a checkbox and verify whether is unchecked:
```javascript
cy.get('#checkboxes > :nth-child(1) > input').check().should('not.be.checked');
```
This scenario will be failed

4. check many times in code and assertion pass:
```javascript
cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
cy.get('@option-1').check();
cy.get('@option-1').check().should('be.checked');
```