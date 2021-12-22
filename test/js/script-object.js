var company = new Object();
company.name = "Facebook";

company.ceo = "Mark Zuckerberg";
company.ceo = new Object();
company.ceo.FirstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log(company.ceo);
console.log("Company CEO name is " + company.ceo.FirstName);

console.log(company["name"]);
company["$stock of company"] = "343";
console.log(company["$stock of company"]);