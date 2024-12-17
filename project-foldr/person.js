export class Person {
	constructor(fullName, birthYear) {
	  this.fullName = fullName;
	  this.birthYear = birthYear;
	}
  
	get age() {
	  const currentYear = new Date().getFullYear();
	  return currentYear - this.birthYear;
	}
  
	getInfo() {
	  return `${this.fullName} is ${this.age} years old.`;
	}
  }