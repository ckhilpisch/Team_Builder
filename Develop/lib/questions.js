const inquirer = require("inquirer")
const validator = require("email-validator");

const questions = [
    {
        type : 'input',
        name : 'name',
        message : "What is your Employee's name?",
        default : 'Employee Name'
    },
    {
        type: 'list',
        message: "What is this Employee's role?",
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern'],
        default: 'Employee'
    
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this Emp[loyee's ID?",
        default: '0'

    },
    {
        type: 'input',
        name: 'email',
        message: "What is this Employee's email address?",
        default: "test@test.com" 
    },
    {
        type: 'input',
        name: 'github',
        when: function( answers ) {
            return answers.role === 'Engineer'
        },
        message: "What is this employee's Github username?",
        default: 'github'

    },
    {
        type:'input',
        name: 'school',
        when: function( answers ) {
            return answers.role === 'Intern'
        },
        message: 'What school does this intern attend?',
        default: 'University'
    },
    {
        type:'input',
        name: 'officeNum',
        when: function( answers ) {
            return answers.role === 'Manager'
        },
        message: "What is this Manager's  office number?",
        default: '1313'
    },
    {
        type: "confirm",
        name: "askAgain",
        message: "Would you like to enter another Employee?",
        default: true
    },
]
module.exports = questions;
