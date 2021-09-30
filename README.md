# Lecture076 - VARIABLES PART4/4

1. common mistake when declare variable/const:
```javascript
    it.only("Navigating to specific product pages", () => {
        //cypress code
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Makeup").click(); 

        //this code will fail => declaring variable or const
        const header = cy.get("h1 .maintext");
        //cy.log(header);
        cy.log(header.text()); //bring an object
    });
```

2. best approach using promises:
```javascript
    it.only("Navigating to specific product pages", () => {
        //cypress code
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='category&path=']").contains("Makeup").click(); 

        //using promises:
        cy.get("h1 .maintext").then(($headerText) => {
            //variable or const declaration:
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq('Makeup');
        })
    });
```
