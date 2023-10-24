// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown'); // Assuming 'generateMarkdown.js' is in the same directory

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  // TODO: Add more questions for other project details (installation, usage, license, etc.)
];

//TODO: Create a function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README.md has been successfully generated!');
    }
  });
}

// TODO: Create a function to initialize the app
function init() {
  inquirer
    .prompt(questions)
    .then((userResponses) => {
      const markdown = generateMarkdown(userResponses);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error('Error occurred during inquirer prompts:', error);
    });
}

// Function call to initialize the app
init();
