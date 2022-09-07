// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// ['What is your project name?','What are the installation instructions?','What is the usage?',"Who contributed?","What are the features?"];
const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: "title",
            message: "What is your project name?"
        },
        {
            type: 'input',
            name: "installation",
            message: "What are the installation instructions?"
        },
        {
            type: 'input',
            name: "usage",
            message: "What is the usage?"
        },
        {
            type: 'input',
            name: "features",
            message: "What are the features?"
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select what licenses to include',
            choices: ['MIT',"GNU","ISC","Apache"]
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Input your email so people can reach you with questions'
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Input your GitHub username (Please enter a valid user)' 
        }
        
    ])
    .then((answers) => {
        writeToFile(answers);
    })
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", generateMarkdown(data), (err) => 
     err ? console.log(err): console.log("Successfully created README"))
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
