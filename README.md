# Lecture072 - CY.LOG

1. cypress commands for cy.log:
```javascript
    cy.get("a[href$='contact']").click().then(function(linktext){
        cy.log(">>>> Clicked on link using text: " + linktext.text());
    });
```
