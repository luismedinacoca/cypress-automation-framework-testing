# Lecture117 - VALIDATING STATE OF RADIO BUTTONS (CHECKED & UNCHECKED)

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
│       │   radio-buttons.js  ****
│       │   ...
```
1. Since the html code:
```html
<form action="" class="radio-buttons" id="radio-buttons-selected-disabled">
	<input type="radio" name="vegetable" value="lettuce">Lettuce<br>
    <input type="radio" name="vegetable" value="cabbage" disabled="">Cabbage<br>
    <input type="radio" name="vegetable" value="pumpkin" checked="">Pumpkin
</form>
```
our selector shouls be:
[value='lettuce']
[value='pumpkin']


2. Check a radio button element:
```javascript
cy.get("[value='lettuce']").check().should('be.checked');
cy.get("[value='pumpkin']").should('not.be.checked');
```