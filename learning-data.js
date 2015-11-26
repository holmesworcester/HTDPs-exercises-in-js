// I want to figure out how data works. 

// A Person is an Object with the properties firstName, lastName, age, eyeColor
// interpretation: a person in our system.

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person.firstName);

console.log(person["firstName"]);

name = "firstName";

console.log(person[name]);

person[name] = "Holmes";

console.log(person[name]);

person.gender = "male";

console.log(person.gender);

person.gender = "female";

console.log(person.gender);

person["gender"] = "male";

console.log(person.gender);

console.log(person);

person.age++;

console.log(person.age);

person.fullName = function () {
	return this.firstName + " " + this.lastName;
}

console.log(person.fullName());
