Lecture042 - Improving our Tests with Dynamic Selectors
1. having a selector with classes which can change in the future, we'd rather use another type:
for a element as follows:
```html
<li><a href="https://automationteststore.com/index.php?rt=content/contact" style="">Contact Us</a></li>
```
with 
```javascript
 cy.get('.info_links_footer > :nth-child(5) > a').click();
```
better would be to be used: "tag[attribute$='finish-with-this-value']"
```javascript
cy.get("a[href$='contact']");
```

2. the same for this element:
element:
```html
<button type="submit" class="btn btn-primary lock-on-click" title="Submit" data-loading-text="<i class='fa fa-refresh fa-spin'></i>">
		<i class="fa fa-check"></i> Submit		
</button>
```
changing this 
```javascript
cy.get('.col-md-6 > .btn').click();
```
to this one:
```javascript
cy.get("button[title='Submit']").click();
```
