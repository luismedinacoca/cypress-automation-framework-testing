Lecture041 - Xpath selectors
1. install the extension: Ranorex Selocity 


```javascript
//*[text()='Contact Us']
//a[text()='Contact Us']
//h2[text()='Contact Us']/following-sibling::ul
//input[contains(@name, 'email')]
//*[starts-with(text(), 'Cont')]
//h2[starts-with(text, 'Con')]/following-sibling::ul

```

2. adding the following code inside cypress/support/index.js
```javascript
require('cypress-xpath');
```