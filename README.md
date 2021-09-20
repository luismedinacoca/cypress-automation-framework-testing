# Lecture054 - Headed Electron Browser
1. running in the terminal the following command
```javascript
$ ./node_modules/.bin/cypress run --headed
```

run many commands:
```javascript
$ npm install -D cypress-xpath 
```

verify inside package.json:
```javascript
"cypress-xpath": "^1.6.2" 
```
was added

added:
```javascript
require('cypress-xpath') 
```
inside project's cypress/support/index.js
