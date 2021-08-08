Lecture047 - Chai JQuery
1. adding an assertion:
with an element as follows:
```html
<div class="input-group col-md-7 ">
	<input type="text" name="email" id="ContactUsFrm_email" value="" placeholder="" class="form-control ">
<span class="input-group-addon"><span class="required">*</span></span>
</div>
```
we can verify with an assertion as follows:
```javascript
cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
```
