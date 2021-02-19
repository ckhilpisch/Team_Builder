// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, role, id, email, officeNumber) {
        super (name, role, id, email);
        this.officeNumber = officeNumber;
    }
    getGithub(){
        github = answers.github
    }
    getRole(){
       this.role = answers.role
    }

}