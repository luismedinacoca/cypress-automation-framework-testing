# Lecture070 - Then command

1. non a cypress commands, it will execute first:
```javascript
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click().then(function(itemHeaderText){
            console.log("Selected the following item: " + itemHeaderText.text());
    });
    console.log("Test-123"); //it's not a cypress code so this will execute first
```
