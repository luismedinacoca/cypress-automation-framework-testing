# Lecture078 - VARIABLES, PROMISES AND NESTED CLOSURES

1. cypress command chaining:
```javascript
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');
```

2. JQuery using promises:
```javascript
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
        const firstNametext = text.find('#field_11').text();
        expect(firstNametext).to.contain('First name');
    });
```

3. Embedded commands:
```javascript
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
        const firstNametext = text.find('#field_11').text();
        expect(firstNametext).to.contain('First name');

        //embedded commands:
        cy.get('#field_11').then(fnText => {
            cy.log(fnText.text()); 
            cy.log(fnText); 
        });
    });
```
