const inquirer = require("inquirer")

    inquirer.prompt([
    {
        type : 'input',
        name : 'name',
        message : 'What is your name',
        default : 'Employee Name'
    },
    {
        type: 'list',
        message: 'What is your employee role?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern'],
        default: 'Employee'
    
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
        default: '0'

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: "test@test.com"
        
    },
    {
        type: 'input',
        name: 'github',
        when: function( answers ) {
            return answers.role === 'Engineer'
        },
        message: 'What is your Github username?',
        default: 'github'

    },
    {
        type:'input',
        name: 'school',
        when: function( answers ) {
            return answers.role === 'Intern'
        },
        message: 'What school do you attend?',
        default: 'University'
    },
    {
        type:'input',
        name: 'officeNum',
        when: function( answers ) {
            return answers.role === 'Manager'
        },
        message: 'What is your office number?',
        default: '1313'
    },
]).then((respObject)=> {
        let newEmployee = respObject;
        array.push(newEmployee)
        console.log(newEmployee); });
