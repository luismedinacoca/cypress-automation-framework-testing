/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
before(function(){
    cy.fixture('example').then(function(data){
        //this.data = data;
        globalThis.data = data;
    })
})

    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        //cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('http://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});


        //cy.document for <head> properties
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');

        //cy.url()
        cy.url().should('include', 'contactus');

        //cy.title:
        cy.title().should('include', 'WebDriver | Contact Us');

        /*
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type("Text area will be completed in the future....");
        cy.get('[type="submit"]').click();
        //assertion for the title getting the text:
        cy.get('h1').should('have.text', 'Thank You for your Message!');*/
        cy.webdriverUni_ContactForm_submission(data.first_name, data.last_name, data.email, "Text area will be completed in the future....", "h1", "Thank You for your Message!");
    });

    it("Should NOT be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
        //cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('http://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});

        //cy.document for <head> properties
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');

        //cy.url()
        cy.url().should('include', '-Us/contact');
        
        //cy.title:
        cy.title().should('include', 'Contact Us');

        /*
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('textarea.feedback-input').type("Text area will be completed in the future....");
        cy.get('[type="submit"]').click();
        //adding assertion with contains method:
        cy.get('body').contains('Error: all fields are required');*/
        cy.webdriverUni_ContactForm_submission(data.first_name, data.last_name, " ", "Text area will be completed in the future....", "body", "Error: Invalid email address");
    });
})