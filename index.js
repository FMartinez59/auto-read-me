const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "ProjectTitle",
      message: "What is your Project Title",
    },
    {
      type: "input",
      name: "descriptionOne",
      message: "What was your motivation?",
    },
    {
      type: "input",
      name: "descriptionTwo",
      message:
        'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
    },
    {
      type: "input",
      name: "descriptionThree",
      message: "What problem does it solve?",
    },
    {
      type: "input",
      name: "descriptionFour",
      message: "What did you learn?",
    },
    {
      type: "input",
      name: "Installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
      type: "input",
      name: "Usage",
      message:
        "Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ```md ![alt text](assets/images/screenshot.png)```",
    },
    {
      type: "input",
      name: "Credits",
      message:
        "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well",
    },
    {
      type: "list",
      name: "License",
      message: "What license does your project have?",
      choices: ["MIT", "APACHE2.0", "CC", "None"],
    },
    {
      type: "input",
      name: "Questions",
      message: "What's your Github username and Email",
    },
  ]);
};

//read.me markdown syntax
function generateReadMe({
  ProjectTitle,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  descriptionFour,
  Installation,
  Usage,
  Credits,
  License,
  Questions,
}) {
  return `# ${ProjectTitle}
  ## License
  ${License} ${runLicense(License)}
 
  ## Description 
  ${descriptionOne} ${descriptionTwo} ${descriptionThree} ${descriptionFour}
  
  ## Table of Contents (Optional)
  
  ## Installation
  ${Installation}
  
  ## Usage
  ${Usage}
  
  ## Credits
  ${Credits}

  ## Questions
  ${Questions}
`;
}
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then(function (answers) {
      fs.writeFileSync("./README.md", generateReadMe(answers));
    })
    //fs.writeFileSync(console.log(answers)))
    .then(() => console.log("Successfully wrote to read.me"))
    .catch((err) => console.error(err));
};

function runLicense(data) {
  if (data === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data === 'APACHE2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (data === 'CC') {
    return `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`
  } else (data === 'None') {
    return `No License Available`
  }
}


init();

