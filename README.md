# Lecture130 - CLICK, HOLD AND ASSERTION:

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
<div class="col-lg-12 text-center" id="click-box" style="background: tomato; font-size: 30px;">Dont release me!!!</div>
```

2. Double click:
```javascript
cy.get('#double-click').trigger('mousedown', {which: 1});
```

3. Complete Code:
```javascript
it("I should be able to hold down the left mouse click button on a given item", () => {
    cy.visit('http://webdriveruniversity.com');
    cy.get('#actions').invoke('removeAttr', 'target').click({force:true});

    cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
       expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
    });
});
```