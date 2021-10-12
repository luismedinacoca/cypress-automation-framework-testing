# Lecture116 - HANDLING RADIO BUTTONS

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
<form action="" class="radio-buttons" id="radio-buttons" style="">
    <input type="radio" name="color" value="green">Green<br>
    <input type="radio" name="color" value="blue">Blue<br>
    <input type="radio" name="color" value="yellow">Yellow<br>
	<input type="radio" name="color" value="orange">Orange<br>
    <input type="radio" name="color" value="purple">Purple
</form>
```

2. Check first radio button element:
```javascript
cy.get('#radio-buttons').find("[type='radio']").first().check();
```

3. Check second radio button element:
```javascript
cy.get('#radio-buttons').find("[type='radio']").eq(2).check();
```