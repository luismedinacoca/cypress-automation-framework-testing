Lecture035 - Practical in Depth Look into Selectors

1. changing from:
```
cypress
│   README.md
|   cypress.json
│   package.json    
│   package-lock.json  
│   .gitignore      
│
└───fixtures
│   │   file011.txt
│   │   file012.txt
│   │   ...
│   
└───integration
│   │   contact-us.js
│   └───examples
│       │   file111.txt
│       │   file112.txt
│       │   ...    
```
to

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   package-lock.json  
│   .gitignore      
│
└───fixtures
│   │   file011.txt
│   │   file012.txt
│   │   ...
│   
└───integration
│   │   contact-us.js
│   └───automation-test-store
│   |   │   contact-us.js
│   └───examples
│       │   file111.txt
│       │   file112.txt
│       │   ... 
│   └───webdriver-uni
│       │   contact-us.js
```

1. second contact-us.js should contains:
```javascript
/// <reference types="cypress" />

describe("Test Contact Us from via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit('https://automationteststore.com');
    });
})
``` 
1. execute the test. you will see many xhr in the test runner - time path. So we need to add the following code 
```javascript
Cypress.Server.defaults({
    whitelist: (xhr) => {
        return true;
    }
})
``` 
inside 
```
cypress
│   README.md
|   cypress.json
│   package.json    
│   package-lock.json  
│   .gitignore 
└───fixtures
│   │   file011.txt
│   │   file012.txt
│   │   ...
│   
└───integration
│   │   file011.txt
│   │   file012.txt
│   │   ...
│
└───support
│   │   command.js
│   │   index.js (*)
└───node_modules
│   │   file011.txt
│   │   file012.txt
│   │   ...
│
```

