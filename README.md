Lecture048 - Assertion Challenge - Webdriveruniversity
1. adding an assertion:
with an element as follows:
```html
<div id="contact_reply">
        <h1>Thank You for your Message!</h1>
	<div id="fountainG">
	   <div id="fountainG_1" class="fountainG"></div>
	   <div id="fountainG_2" class="fountainG"></div>
	   <div id="fountainG_3" class="fountainG"></div>
	   <div id="fountainG_4" class="fountainG"></div>
	   <div id="fountainG_5" class="fountainG"></div>
	   <div id="fountainG_6" class="fountainG"></div>
	   <div id="fountainG_7" class="fountainG"></div>
	   <div id="fountainG_8" class="fountainG"></div>
    </div>
</div>
```
we can verify with an assertion as follows:
```javascript
    //assertion for the title getting the text:
    cy.get('h1').should('have.text', 'Thank You for your Message!');
```
