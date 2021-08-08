Lecture046 - Adding assertions to our Existing Tests
1. adding an assertion:

```javascript
cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
```

see on this pages:
[Chai Assertion Library](http://www.chaijs.com)
[Assertions](https://docs.cypress.io/guides/references/assertions)