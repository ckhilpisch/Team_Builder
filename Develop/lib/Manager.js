const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, role, id, email, officeNumber) {
        super (name, role, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        role = "Manager"
    }
}
module.exports = Manager;