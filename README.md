Lecture050 - Cypress contains method
1. adding an assertion:
we can verify with an assertion using contains method:
```javascript
    //adding assertion with contains method:
    cy.get('body').contains('Error: all fields are required');
    cy.get('body').contains('Error: Invalid email address');
```
