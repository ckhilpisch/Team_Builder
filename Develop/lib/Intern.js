
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, role, id, email, school) {
        super (name, role, id, email);
        this.school = school
    }
    getSchool(){
        school = answers.school
    }
    getRole(){
        this.role = "intern"
    }
}

const intern1 = new Intern("Sally", 1, "sally@sally.com", "Trilogy University")
console.log(intern1);