"use strict";

let employees = [
    {name: "Dana", salary: 62000},
    {name: "Brenda", hourlyRate: 16.75, hoursWorked: 40},
    {name: "Vanessa", hourlyRate: 16.50, hoursWorked: 40},
    {name: "Jeremy", salary: 58000},
    {name: "Rob", salary: 82000}
]

let len = employees.length
for (let i = 0; i < len; i++)
{
    
    let employee = employees[i]
    for (let key in employee)
    {
        if (key == "salary")
        {
            let grossPay = employee[key] / 52;   
            getPayStub(grossPay,employee)
        }
        else if (key == "hourlyRate")
        {
            let grossPay = employee[key] * employee.hoursWorked;
            getPayStub(grossPay,employee)
        }
    }
}

function getPayStub(grossPay,employee)
{
  let fedTax = grossPay * 0.125;
  let socSec = grossPay * 0.062;
  let medTax = grossPay * 0.0145;
  let netPay = grossPay - fedTax - socSec - medTax;
  console.log(`Employee: ${employee.name}`);
  console.log(`Gross Pay: $${grossPay.toFixed(2)}`);
  console.log(`FICA: $${fedTax.toFixed(2)}`);
  console.log(`Social Security: $${socSec.toFixed(2)}`);
  console.log(`Medicare: $${medTax.toFixed(2)}`);
  console.log(`Net Pay: $${netPay.toFixed(2)}`);
  console.log("-----------------------");
}
