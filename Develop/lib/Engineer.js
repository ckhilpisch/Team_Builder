const Employee = require("./Employee")
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.


class Engineer extends Employee {
    constructor(name, role, id, email, github) {
        super (name, role, id, email);
        this.github = github;
    }
    getGithub(){
        github = answers.github
    }
    getRole(){
        this.role = role
        return "engineer"
    }

}
const engineer = new Engineer('colin', 'ghost', 1, 'test@test.com', 'git@github.com');
console.log(engineer);

