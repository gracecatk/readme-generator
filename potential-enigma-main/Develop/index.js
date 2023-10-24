// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); // Import the generateMarkdown function


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'Enter the title of your project: ',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Provide a brief description of your project: ',
  },
  {
    type: 'input',
    name: 'Table of contents',
    message: 'Provide a table of contents for your project: ',
  },
  {
    type: 'input',
    name: 'Installations',
    message: 'Provide a brief description of your project: ',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Provide a brief description of your project: ',
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Provide a brief description of your project: ',
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Provide a brief description of your project: ',
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'Provide a brief description of your project: ',
  },
];

// TODO: Create a function to write README file- a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function writeToFile(fileName, data) {
  // Use the fs module to write the data to a file with the given filename
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md has been created successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate the README content using the answers
    const readmeContent = generateMarkdown(answers);

    // Specify the filename for the README
    const fileName = 'README.md';

    // Write the README file
    writeToFile(fileName, readmeContent);
  });
}

// Function call to initialize app
init();