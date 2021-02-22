const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, role, id, email, github) {
        super (name, role, id, email);
        this.github = github;
        this.role = role
    }
    getGithub(){
        return this.github
    }
    getRole(){
        this.role = "Engineer"
    }

}
module.exports = Engineer;

