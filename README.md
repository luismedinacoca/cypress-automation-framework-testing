# Lecture157 - HANDLING DATE PICKER

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
│       │   datepicker.js  ***
│       │   iframe.js  
│       │   js-alert.js
│       │   mouse-actions.js 
│       │   radio-buttons.js
│       │   select-dropdown-list.js
│       │   traversing-elements.js
│       │   ...
```
1. since html code:
```html
    <div
      class="
        datepicker datepicker-dropdown
        dropdown-menu
        datepicker-orient-left datepicker-orient-top
      "
      style="display: block; top: 238px; left: 56px"
    >
      <div class="datepicker-days" style="display: block">
        <table class="table-condensed">
          <thead>
            <tr>
              <th class="prev" style="visibility: visible">«</th>
              <th colspan="5" class="datepicker-switch">November 2021</th>
              <th class="next" style="visibility: visible">»</th>
            </tr>
            <tr>
              <th class="dow">Su</th>
              <th class="dow">Mo</th>
              <th class="dow">Tu</th>
              <th class="dow">We</th>
              <th class="dow">Th</th>
              <th class="dow">Fr</th>
              <th class="dow">Sa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="old day">31</td>
              <td class="day">1</td>
              <td class="day">2</td>
              <td class="day">3</td>
              <td class="day">4</td>
              <td class="day">5</td>
              <td class="day">6</td>
            </tr>
            <tr>
              <td class="day">7</td>
              <td class="day">8</td>
              <td class="today day">9</td>
              <td class="day">10</td>
              <td class="day">11</td>
              <td class="day">12</td>
              <td class="day">13</td>
            </tr>
            <tr>
              <td class="day">14</td>
              <td class="day">15</td>
              <td class="day">16</td>
              <td class="day">17</td>
              <td class="day">18</td>
              <td class="day">19</td>
              <td class="day">20</td>
            </tr>
            <tr>
              <td class="day">21</td>
              <td class="day">22</td>
              <td class="day">23</td>
              <td class="day">24</td>
              <td class="day">25</td>
              <td class="day">26</td>
              <td class="day">27</td>
            </tr>
            <tr>
              <td class="day">28</td>
              <td class="day">29</td>
              <td class="day">30</td>
              <td class="new day">1</td>
              <td class="new day">2</td>
              <td class="new day">3</td>
              <td class="new day">4</td>
            </tr>
            <tr>
              <td class="new day">5</td>
              <td class="new day">6</td>
              <td class="new day">7</td>
              <td class="new day">8</td>
              <td class="new day">9</td>
              <td class="new day">10</td>
              <td class="new day">11</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="7" class="today" style="display: none">Today</th>
            </tr>
            <tr>
              <th colspan="7" class="clear" style="display: none">Clear</th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="datepicker-months" style="display: none">
        <table class="table-condensed">
          <thead>
            <tr>
              <th class="prev" style="visibility: visible">«</th>
              <th colspan="5" class="datepicker-switch">2021</th>
              <th class="next" style="visibility: visible">»</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="7">
                <span class="month">Jan</span><span class="month">Feb</span
                ><span class="month">Mar</span><span class="month">Apr</span
                ><span class="month">May</span><span class="month">Jun</span
                ><span class="month">Jul</span><span class="month">Aug</span
                ><span class="month">Sep</span><span class="month">Oct</span
                ><span class="month active">Nov</span
                ><span class="month">Dec</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="7" class="today" style="display: none">Today</th>
            </tr>
            <tr>
              <th colspan="7" class="clear" style="display: none">Clear</th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="datepicker-years" style="display: none">
        <table class="table-condensed">
          <thead>
            <tr>
              <th class="prev" style="visibility: visible">«</th>
              <th colspan="5" class="datepicker-switch">2020-2029</th>
              <th class="next" style="visibility: visible">»</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="7">
                <span class="year old">2019</span><span class="year">2020</span
                ><span class="year active">2021</span
                ><span class="year">2022</span><span class="year">2023</span
                ><span class="year">2024</span><span class="year">2025</span
                ><span class="year">2026</span><span class="year">2027</span
                ><span class="year">2028</span><span class="year">2029</span
                ><span class="year new">2030</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="7" class="today" style="display: none">Today</th>
            </tr>
            <tr>
              <th colspan="7" class="clear" style="display: none">Clear</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
```

2. Complete Code:
```javascript
describe("Test Datepicker via webdriveruniversity", () => {
    it("Select date from the datepicker", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true});
        cy.get('#datepicker').click();
        /**
        let date = new Date();
        date.setDate(date.getDate());
        cy.log(date.getDate());

        date.setDate(date.getDate() + 6);
        cy.log(date.getDate());
        */

        var date = new Date();
        date.setDate(date.getDate() + 100);

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthAndYear(){
            cy.get(".datepicker-dropdown").find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click();
                    cy.log("Future year to select: " + futureYear);
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get(".datepicker-dropdown").find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click();
                        cy.log("Future month to select: " + futureMonth);
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay(){
            cy.get("[class='day']").contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();
    });
})
```