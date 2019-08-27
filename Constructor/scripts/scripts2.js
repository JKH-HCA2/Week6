"use strict";

function Policy(num, hold, type, iss, ren, prem) {
  this.policyNumber = num;
  this.policyHolder = hold;
  this.policyType = type;
  this.issueDate = iss;
  this.renewalDate = ren;
  this.premium = prem;
}
Policy.prototype.renew = function(premiumChangePct) {
  let oldDate = new Date(this.renewalDate);
  let year = oldDate.getFullYear() + 1;
  let month = oldDate.getMonth();
  let day = oldDate.getDate();
  let newDate = month + 1 + "/" + day + "/" + year;
  this.renewalDate = newDate;
  this.premium = (this.premium * premiumChangePct).toFixed(2);
};

Policy.prototype.display = function() {
  console.log(`Policy Number: ${this.policyNumber}`);
  console.log(`Policy Holder: ${this.policyHolder}`);
  console.log(`Policy Type: ${this.policyType}`);
  console.log(`Issue Date: ${this.issueDate}`);
  console.log(`Renewal Date: ${this.renewalDate}`);
  console.log(`Policy Premium: $${this.premium}`);
};


let p1 = new Policy(19634, "John Smith", "Auto", "8/27/2018","8/27/2019", 650)
let p2 = new Policy(18221, "Jack Smith", "Home", "10/15/2018","10/15/2019", 750)
let p3 = new Policy(63179, "Jane Smith", "Auto", "7/01/2019","7/01/2020", 450)
let p4 = new Policy(19412, "Jeff Smith", "Home", "8/27/2018","8/27/2019", 925)
let p5 = new Policy(32784, "Jane Smith", "Auto", "2/18/2019","2/18/2020", 370)
let policies = [
    p1,p2,p3,p4,p5
]
for (let i = 0; i < policies.length; i++)
{
	let today = getDate();
	if (policies[i].renewalDate == today)
	{
		if (policies[i].policyType == "Home")
		{
			let premiumChangePct = 1.03
			policies[i].renew(premiumChangePct)
		}
		else
		{
			let premiumChangePct = 1.05
			policies[i].renew(premiumChangePct)
		}
	}
    policies[i].display();
    console.log("---------------")
}

function getDate()
{
	let currDate = new Date()
	let month = currDate.getMonth();
	let year = currDate.getFullYear();
	let day = currDate.getDate();
	let today = `${month + 1}/${day}/${year}`
	return today;
}



