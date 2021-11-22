# Lecture179 - IGNORE FILES

```
cypress
│   README.md
|   cypress.json   🕧
│   package.json    
│   ...
└───fixtures
│   │   examples.json   
│   │   products.json      
│   │   userDetails.json    
│   
└───integration 
│   │   
│   └───automation-test-store
│   |   │   add-multiple-items-to-basket.js
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
└───support
│   │   commands.js
│   |   │   ...
```
1. since this link: 
[Configuration | Cypress documentation](https://docs.cypress.io/guides/references/configuration#Folders-Files)

2. Modify cypress.json file as follow:
```json
{
    "chromeWebSecurity": false,
    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 30000,
    "ignoreTestFiles": "**/other/*"
}
```