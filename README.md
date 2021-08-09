Lecture052 - cy.title()
1. a kind of assertion for <head> tag only:
we need to verify whether charset = "UTF-8":
```html
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Free Online (Interaction) Training Platform. Enhance yours skills within Automation Testing (Selenium WebDriver), Complicated Tasks &amp; Framework Design…">
    <meta name="author" content="Gianni Bruno">
    <meta name="keywords" content="WebDriver University, WebDriver, Webdriver, Selenium, Selenium WebDriver, Automation Testing, Automation Testing Platform, Java, Jenkins, Cucumber, BDD, TestNG, JUNit">

  <title>WebDriver | Contact Us</title>
  <script>...</script>
</head>  
```

```javascript
    //cy.title:
    cy.title().should('include', 'WebDriver | Contact Us');
```
