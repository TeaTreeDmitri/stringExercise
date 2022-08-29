// Given a name string, e.g. “Peter Heronimous Lind” - 
//split the string into three variables: firstName, middleName and lastName.
// Hint: use indexOf and substring 
// Expect the name to be a const - you can’t modify it.
// Console.log the three variables at the very end of your code.

const fullName = "Peter Heronimous Lind";
let firstName = "";
let middleName = "";
let lastName = "";
let firstSpace = "";
let lastSpace = "";
let lengthOf = "";

lengthOf = fullName.length;
firstSpace = fullName.indexOf(" ");
lastSpace = fullName.lastIndexOf(" ");
firstName = fullName.substring(0, firstSpace);
middleName = fullName.substring(firstSpace, lastSpace);
lastName = fullName.substring(lastSpace, lengthOf);


console.log("First Name:", firstName.trim());
console.log("Middle Name:", middleName.trim());
console.log("Last Name:", lastName.trim());