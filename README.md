# Lecture060 - More examples of chaining - get, find contains, eq
1. running the recomemended cypress selector:
```javascript
    cy.visit("https://automationteststore.com");
    cy.get("#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname").click();  
```

2. running with a specific class - prdocutname class:
```javascript
    cy.visit("https://automationteststore.com");
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
```

3. running with a fixed_warpper class and using find for another class and index:
```javascript
    cy.visit("https://automationteststore.com");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
```