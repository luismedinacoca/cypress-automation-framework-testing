/// <reference types="cypress" />

describe("Test file upload via webdriveruniversity", () => {
    it("Upload a file .....", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});

        cy.fixture("MacBook.png", "base64").then( fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "MacBook.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input" 
                }
            )
        });
        cy.get("#submit-button").click();
    });
})