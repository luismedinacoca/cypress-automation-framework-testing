/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#contact-us > .thumbnail > .section-title > h1').click()
    }),
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
        cy.visit('https://webdriveruniversity.com/');
    })
})