# Lecture110 - HANDLING IFRAME

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
│       │   iframe.js  ****
│       │   ...
```

```html
<iframe id="frame" src="../Page-Object-Model/index.html">
	<head>...</head>
	<body>
		<button type="button" class="btn btn-secondary center-block" data-toggle="modal" data-target="#myModal" id="button-find-out-more"><b>Find Out More!</b></button>

		<div class="modal fade in" id="myModal" role="dialog" style="display: block;">
      		<div class="modal-dialog modal-md">
        		<div class="modal-content">
          			<div class="modal-header">
            			<button type="button" class="close" data-dismiss="modal">×</button>
            			<h4 class="modal-title">Welcome to <b>webdriveruniversity.com</b></h4>
          			</div>
          			
					<div class="modal-body">
            			<p>Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...</p>
          			</div>
          			
					<div class="modal-footer">
            			<button type="button" class="btn btn-default" data-dismiss="modal">Find Out More</button>
            			<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          			</div>
        		</div>
      		</div>
    	</div>
	</body>
	
    <span class="btn btn-default btn-lg dropdown-toggle" type="button" id="button1" data-toggle="modal" data-target="#myModalClick"><p>CLICK ME!</p></span>
</iframe>
```
1. handling Iframe with alias:
```javascript
cy.get('#frame').then($iframe => {
    const body = $iframe.contents().find('body');
    cy.wrap(body).as('iframe');
});
```

2. Whole code with alerts:
```javascript
it("Handling Webdriver Iframe & Modals", () => {
    cy.visit('http://webdriveruniversity.com');
    cy.get('#iframe').invoke('removeAttr', 'target').click({force:true});

    cy.get('#frame').then($iframe => {
        const body = $iframe.contents().find('body');
        cy.wrap(body).as('iframe');
    });

    cy.get('@iframe').find('#button-find-out-more').click();

    cy.get('@iframe').find('#myModal').as('modal');

    cy.get('@modal').should(($expectedText) => {
        const text = $expectedText.text();
        expect(text).to.include('riveruniversity.com we sell a wide range of electrical goods such as lapto');
    });

    cy.get('@modal').contains('Close').click();
});
```