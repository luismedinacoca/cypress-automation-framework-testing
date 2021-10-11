# Lecture114 - HANDLING CHECKBOXES - UNCHECKED

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

1. Uncheck a checkbox:
```javascript
cy.get('#checkboxes > :nth-child(5) > input').uncheck();
```