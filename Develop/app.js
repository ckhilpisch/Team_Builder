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

function addTeamMember () {

    return inquirer.prompt (questions).then((respObject)=> {
      let employeeInfo = respObject
      let newEmployee = "";
      if (employeeInfo.role === "Manager"){
         newEmployee = new Manager(employeeInfo.name,employeeInfo.id, employeeInfo.email, employeeInfo.officeNumber);
      } else if (employeeInfo.role === "Engineer"){ 
         newEmployee = new Engineer(employeeInfo.name,employeeInfo.id, employeeInfo.email, employeeInfo.github);
      } else if (employeeInfo.role === "Intern"){
         newEmployee = new Intern(employeeInfo.name,employeeInfo.id, employeeInfo.email, employeeInfo.school);;
      }
      employees.push(newEmployee);

      if (respObject.askAgain) {
         addTeamMember();
     } else {
         console.log(employees);
         function renderHTML (){
            // await addTeamMember();
            const htmlContent = render(employees);
            console.log(htmlContent);
            fs.writeFile(outputPath, htmlContent, (err) => err ? console.log(err) : console.log('Successfully created an Employee Directory!'))
         }
         renderHTML();
      }  
      
   })
   
}
addTeamMember();
// function renderHTML (){
//    // await addTeamMember();
//    const htmlContent = render(employees);
//    console.log(htmlContent);
//    fs.writeFile(outputPath, htmlContent, (err) => err ? console.log(err) : console.log('Successfully created an Employee Directory!'))
// }

// renderHTML();