# Lecture119 - HANDLING DROPDOWN LISTS

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
│       │   checkboxes.js
│       │   radio-buttons.js
│       │   select-dropdown-list.js  ****
│       │   ...
```
1. Since the html code:
```html
<div class="section-title">
    <select class="dropdown-menu-lists" id="dropdowm-menu-1">
        <option value="java">JAVA</option>
        <option value="c#">C#</option>
        <option value="python">Python</option>
        <option value="sql">SQL</option>
    </select>

    <select class="dropdown-menu-lists" id="dropdowm-menu-2">
        <option value="eclipse">Eclipse</option>
        <option value="maven">Maven</option>
        <option value="testng">TestNG</option>
        <option value="junit">JUnit</option>
    </select>

    <select class="dropdown-menu-lists" id="dropdowm-menu-3">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="jquery">JQuery</option>
    </select>
</div>
```

2. Select an option from each dropdown list:
```javascript
cy.get('#dropdowm-menu-1').select('c#')
//assertion of selected value:
cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng');
cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery');
```