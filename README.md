# Lecture128 - DRAG AND DROP:

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
<div class="col-lg-6 text-center">
    <div class="thumbnail" id="div-drag-drop-thumbnail">
        <div id="draggable" class="ui-widget-content ui-draggable ui-draggable-handle" style="position: relative;">
            <p><b>DRAG ME TO MY TARGET!</b></p>
        </div>
        
        <div id="droppable" class="ui-widget-header ui-droppable">
            <p><b>DROP HERE!</b></p>
        </div>
    </div>
</div>
```

2. Drag and drop coding:
```javascript
it("I should be able to drag and drop a draggable item", () => {
    cy.visit('http://webdriveruniversity.com');
    cy.get('#actions').invoke('removeAttr', 'target').click({force:true});

    cy.get('#draggable').trigger('mousedown', {which: 1});

    cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
})
```