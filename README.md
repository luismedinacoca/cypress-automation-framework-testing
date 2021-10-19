# Lecture129 - DOUBLE CLICK:

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
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
│       │   autocomplete-dropdown-list.js  
│       │   browser-navigation.js  
│       │   checkboxes.js
│       │   contact-us.js
│       │   iframe.js  
│       │   js-alert.js
│       │   mouse-actions.js ****  
│       │   radio-buttons.js
│       │   select-dropdown-list.js
│       │   ...
```
1. since html code:
```html
<div class="thumbnail" id="div-drag-drop-thumbnail">
    <div id="double-click" class="div-double-click">
        <h2>Double Click Me!</h2>
    </div>
</div>
```

2. Double click:
```javascript
cy.get('#double-click').dblclick();
```

3. Complete Code:
```javascript
it("I should be able to perfome a double mouse click", () => {
    cy.visit('http://webdriveruniversity.com');
    cy.get('#actions').invoke('removeAttr', 'target').click({force:true});

    cy.get('#double-click').scrollIntoView();
    cy.wait(1000);
    cy.get('#double-click').dblclick();
})
```