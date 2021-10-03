# Lecture080 - ITERATE THOUGH ELEMENTS

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
│   |   │   contact-us.js
│   |   │   inspect-item.js
│   |   │   iterate-over-elements.js *******
│   |   │   variables-and-cy-commands.js
│   └───webdriver-university
│       │   contact-us.js



1. having the following html code:
```html
<div class="thumbnails grid row list-inline">
   <div class="col-md-3 col-sm-6 col-xs-12">
     <div class="fixed_wrapper">
       <div class="fixed">
         <a class="prdocutname"
           href="https://automationteststore.com/index.php?rt=...product_id=69"
           title="Seaweed Conditioner">Seaweed Conditioner</a>
       </div>
     </div>
   </div>
   <div class="col-md-3 col-sm-6 col-xs-12">
     <div class="fixed_wrapper">
       <div class="fixed">
         <a class="prdocutname"
           href="https://automationteststore.com/index.php?rt=...product_id=71"
           title="Pantene Pro-V Conditioner, Classic Care">Pantene Pro-V Conditioner, Classic Care</a>
       </div>
     </div>
   </div>
   <div class="col-md-3 col-sm-6 col-xs-12">
     <div class="fixed_wrapper">
       <div class="fixed">
         <a class="prdocutname"
           href="https://automationteststore.com/index.php?rt=...product_id=70"
           title="Eau Parfumee au The Vert Shampoo">Eau Parfumee au The Vert Shampoo</a>
       </div>
     </div>
   </div>
   <div class="col-md-3 col-sm-6 col-xs-12">
     <div class="fixed_wrapper">
       <div class="fixed">
         <a class="prdocutname"
           href="https://automationteststore.com/index.php?rt=...product_id=74"
           title="Curls to straight Shampoo">Curls to straight Shampoo</a>
       </div>
     </div>
   </div>
 </div>
```

2. iterate over a element list to get their names:
```javascript
    it("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // iterate in product list, getting index and element name:
            cy.log("Index " + index + ": " + $el.text());
        })
    });
```

3. In case we need to select a specific element though list:
```javascript
    it.only("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            // conditional assessment
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click();
            }
        })
    });
```
