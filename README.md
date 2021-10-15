# Lecture122 - AUTOCOMPLETE DROPDOWN LISTS

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
│       │   autocomplete-dropdown-list.js ****  
│       │   browser-navigation.js  
│       │   checkboxes.js
│       │   contact-us.js
│       │   iframe.js  
│       │   js-alert.js  
│       │   radio-buttons.js
│       │   select-dropdown-list.js
│       │   ...
```
1. Since the html code:
```html
<div id="myInputautocomplete-list" class="autocomplete-items">
    <div>
        <strong>A</strong>sparagus
        <input type="hidden" value="Asparagus">
    </div>
    
    <div>
        <strong>A</strong>vacado
        <input type="hidden" value="Avacado">
    </div>
    
    <div>
        <strong>A</strong>lmond
        <input type="hidden" value="Almond">
    </div>
    
    <div>
        <strong>A</strong>rtichoke
        <input type="hidden" value="Artichoke">
    </div>
    
    <div>
        <strong>A</strong>pple
        <input type="hidden" value="Apple">
    </div>
</div>
```

2. Select an option from each dropdown list:
```javascript
it("Select specific product via autocomplete list", () => {
    cy.visit('http://webdriveruniversity.com');
    cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true});

    cy.get('#myInput').type('A');

    cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = 'Avacado';

        if(prod === productToSelect){
            //$el.click();   => should be this way but $el.click() is deprecated
            $el.trigger("click");

            cy.get('#submit-button').click();
            cy.url().should('include', productToSelect);
        }
    })
});
```