// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['Apache 2.0', 'MIT','Mozilla 2.0', 'None']
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What does this project do?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do I install this project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do I use this project?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this project?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'How do you test this project?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('README has been generated.'))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile('README.md', generateMarkdown(data))
  })
}

// Function call to initialize app
init();
