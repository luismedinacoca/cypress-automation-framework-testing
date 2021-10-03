# Lecture085 - ALIAS AND INVOKE - SOLUTION

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
<div class="thumbnails list-inline">
	<div class="col-md-3 col-sm-6 col-xs-12">
    	<div class="fixed_wrapper">
			<div class="fixed">
				<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;product_id=50" title="Skinsheen Bronzer Stick">Skinsheen Bronzer Stick</a>
			</div>
		</div>
		<div class="thumbnail" style="">
			<div class="pricetag jumbotron">
				<div class="price">
			    	<div class="oneprice">$29.50</div>
			    </div>
		    </div>
        </div>
	</div>

    <div class="col-md-3 col-sm-6 col-xs-12">
    	<div class="fixed_wrapper">
			<div class="fixed">
				<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;product_id=51" title="BeneFit Girl Meets Pearl">BeneFit Girl Meets Pearl</a>
			</div>
		</div>

        <div class="thumbnail" style="">
        	<div class="blurb"></div>
			<div class="pricetag jumbotron">
				<div class="price">
					<div class="pricenew">$19.00</div>
					<div class="priceold">$30.00</div>
				</div>
			</div>
		</div>
    </div>

    <div class="col-md-3 col-sm-6 col-xs-12">
		<div class="fixed_wrapper">
			<div class="fixed">
				<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;product_id=52" title="Benefit Bella Bamba">Benefit Bella Bamba</a>
			</div>
        </div>

        <div class="thumbnail" style="">
            <div class="blurb"></div>
				<div class="pricetag jumbotron">
					<div class="price">
						<div class="oneprice">$28.00</div>
					</div>
				</div>
			</div>
		</div>

    <div class="col-md-3 col-sm-6 col-xs-12">
		<div class="fixed_wrapper">
			<div class="fixed">
				<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&amp;product_id=53" title="Tropiques Minerale Loose Bronzer">Tropiques Minerale Loose Bronzer</a>
			</div>
		</div>

		<div class="thumbnail" style="">
			<div class="pricetag jumbotron">
				<div class="price">
					<div class="oneprice">$38.50</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

2. alias and invoke:
alias "as()"

```javascript
it("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/");
    //.thumbnail webelement as @productThumbnail  Alias
    cy.get('.thumbnail').as('productThumbnail');
    //verifying the length of @productThumbnail elements
    cy.get('@productThumbnail').should('have.length', 16);
    //verifying the element with attribute title and its value is 'Add to Cart'
    cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
})
```