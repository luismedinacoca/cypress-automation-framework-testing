# Lecture115 - HANDLING CHECKBOXES - MULTIPLE CHECKBOXES

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
1. Since the html code:
```html
<div class="section-title" id="checkboxes">
    <label>
		<input type="checkbox" value="option-1">Option 1
	</label><br>
    <label>
		<input type="checkbox" value="option-2">Option 2
	</label><br>
    <label>
		<input type="checkbox" value="option-3" checked="">Option 3
	</label><br>
    <label>
		<input type="checkbox" value="option-4">Option 4
	</label>
</div>
```

2. Check mutiple checkboxes:
```javascript
cy.get('#checkboxes > :nth-child(5) > input').check(["option-1", "option-2", "option-3", "option-4"]);
```