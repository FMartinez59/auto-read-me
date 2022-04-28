const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Project Title',
      message: 'What is your Project Title',
    },
    {
      type: 'editor',
      name: 'descriptionOne',
      message: 'What was your motivation?',
    },
    {
      type: 'editor',
      name: 'descriptionTwo',
      message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")?',
    },
    {
      type: 'editor',
      name: 'descriptionThree',
      message: 'What problem does it solve?',
    },
    {
      type: 'editor',
      name: 'descriptionFour',
      message: 'What did you learn?',
    },
    {
      type: 'editor',
      name: 'Installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'editor',
        name: 'Usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ```md ![alt text](assets/images/screenshot.png)```',
    },
    {
        type: 'editor',
        name: 'Credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well',
    },
    {
        type: 'list',
        name: 'License',
        message: 'What license does your project have?',
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "What's your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
  ]);
};
