# Lecture159 - UPLOADING FILE(S)

```
cypress
│   README.md
|   cypress.json
│   package.json    
│   ...
└───fixtures
│   │   ...
│   
└───integration 
│   │   
│   └───automation-test-store
│   |   │   alias-invoke.js
│   |   │   ...
│   │   
│   └───other
│   |   │   same-origin-policy.js
│   │ 
│   └───webdriver-university
│       │   autocomplete-dropdown-list.js  
│       │   browser-navigation.js  
│       │   checkboxes.js
│       │   contact-us.js
│       │   data-table.js
│       │   datepicker.js
│       │   file-upload.js  ***
│       │   iframe.js  
│       │   js-alert.js
│       │   mouse-actions.js 
│       │   radio-buttons.js
│       │   select-dropdown-list.js
│       │   traversing-elements.js
│       │   ...
```
1. since this link:
[cypress-file-uploas-npm][https://www.npmjs.com/package/cypress-file-upload]
```javascript
npm install --save-dev cypress-file-upload
```

2. add the following import in support/commands.js
```
import 'cypress-file-upload';
```

3. since html code:
```html
<form>
  <h2>Please choose a file to upload:</h2>
  <input type="file" id="myFile" name="filename">
  <input type="submit" id="submit-button" onclick="fileSubmitted()">
</form>
```

4. Complete cypress Code:
```javascript
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
```