# Lecture081 - ALIAS AND INVOKE

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
│   │   file011.txt
│   │   file012.txt
│   │   ...
│   
└───integration
│   │   
│   └───automation-test-store
│   |   │   alias-invoke.js
│   |   │   contact-us.js
│   |   │   inspect-item.js
│   |   │   iterate-over-elements.js
│   |   │   variables-and-cy-commands.js
│   └───webdriver-university
│       │   contact-us.js
```

1. having the following html code:
```html
<div class="col-md-3 col-sm-6 col-xs-12">
	<div class="fixed_wrapper">
		<div class="fixed">
			<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;path=52&amp;product_id=69" title="Seaweed Conditioner">Seaweed Conditioner</a>
		</div>
	</div>
</div>
```

2. alias and invoke:
alias "as()"

```javascript
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('include', 'weed Condit');
    });
```

3. see that invoke('text') is geeting the text from the selector:
```javascript
    cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text')
```
this command is getting
```html
<div class="fixed_wrapper">
	<div class="fixed">
		<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;path=52&amp;product_id=69" title="Seaweed Conditioner">Seaweed Conditioner</a>
	</div>
</div>
```
