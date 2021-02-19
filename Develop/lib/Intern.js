// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, role, id, email, github) {
        super (name, role, id, email);
        this.school = this.school
    }
    getSchool(){
        school = answers.school
    }
    getRole(){
        return "intern"
    }

}
