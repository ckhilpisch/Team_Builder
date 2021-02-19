const questions = 
[
    {
        type : 'input',
        name : 'name',
        message : 'What is your name',
        default : 'Employee Name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
        default: '0'

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
        name: 'email',
        message: 'What is your email address?',
        default: "test@test.com"
        
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        default: 'github'

    },
    {
        type:'input',
        name: 'school',
        message: 'What school do you attend?',
        default: 'University'
    },
    {
        type:'input',
        name: 'officeNum',
        message: 'What is your office number?',
        default: '1313'
    },

]
