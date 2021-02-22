const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employees = [];
const questions = require("./lib/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function addTeamMember () {
   // console.log("Tell us about your stellar team!")
    return inquirer.prompt (questions).then((respObject)=> {
      let employeeInfo = respObject
      let newEmployee = "";
      if (employeeInfo.role === "Manager"){
         newEmployee = new Manager(employeeInfo.name, employeeInfo.role, employeeInfo.id, employeeInfo.email, employeeInfo.officeNumber);
      } else if (employeeInfo.role === "Engineer"){ 
         newEmployee = new Engineer(employeeInfo.name, employeeInfo.role, employeeInfo.id, employeeInfo.email, employeeInfo.github);
      } else if (employeeInfo.role === "Intern"){
         newEmployee = new Intern(employeeInfo.name, employeeInfo.role, employeeInfo.id, employeeInfo.email, employeeInfo.school);;
      }
      employees.push(newEmployee);

      if (respObject.askAgain) {
         addTeamMember();
     } else {
         console.log(employees);
     }  
   })

}
addTeamMember();

// function renderHTML (){
//    fs.writeFile(outputPath, render, (err) => err ? console.log(err) : console.log('Successfully created an Employee Directory!'))
// }
// renderHTML();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

