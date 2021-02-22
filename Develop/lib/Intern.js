const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, role, id, email, school) {
        super (name, role, id, email);
        this.school = school
        this.role = role
    }
    getSchool(){
        return this.school;g
    }
    getRole(){
       role = "Intern"
    }
}

module.exports = Intern;