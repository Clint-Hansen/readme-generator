// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const init = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Please enter your GitHub username',
      validate: gitHubUsername => {
        if (gitHubUsername) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a title for your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description for your project',
      validate: projectDiscription => {
        if (projectDiscription) {
          return true;
        } else {
          console.log('Please enter a description for your project!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions',
      validate: projectInstallation => {
        if (projectInstallation) {
          return true;
        } else {
          console.log('Pease enter installation instructions for your project!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information',
      validate: projectUsage => {
        if (projectUsage) {
          return true;
        } else {
          console.log('Pease enter usage information for your project!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter contribution guidelines',
      validate: projectContribution => {
        if (projectContribution) {
          return true;
        } else {
          console.log('Pease enter contribution guidelines for your project!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please enter test instructions',
      validate: projectTest => {
        if (projectTest) {
          return true;
        } else {
          console.log('Pease enter test instructions for your project!')
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please choose a license for your application (If no license is to be included then just press enter)',
      choices: ['Apache 2.0', 'MIT', 'GPL v2', 'GPL v3', 'ISC']
    },
  ]);
  }
  init()
  .then (promptData => {
      console.log(promptData)
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}