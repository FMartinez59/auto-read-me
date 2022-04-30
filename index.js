const inquirer = require("inquirer");
const fs = require("fs");
const { relative } = require("path");

// Use writeFileSync method to use promises instead of a callback function

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
        'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")?',
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
      choices: ["MIT", "APACHE2.0", "CC", "	EUPL-1.1"],
    },
    {
      type: "input",
      name: "Questions",
      message: "What's your Github username?",
    },
    {
      type: "input",
      name: "Questions",
      message: "What's your email?",
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
  ## ${descriptionOne} ${descriptionTwo} ${descriptionThree} ${descriptionFour}
  
  ## Table of Contents (Optional)
  
  ## ${Installation}
  
  ## ${Usage}
  
  ## ${Credits}

  ## ${License}

  ## ${Questions}
`;
}
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then(function (answers) {
      console.log(answers);
      fs.writeFileSync("./README.md", generateReadMe(answers));
    })
    //fs.writeFileSync(console.log(answers)))
    .then(() => console.log("Successfully wrote to read.me"))
    .catch((err) => console.error(err));
};

init();

//ProjectTitle, descriptionOne, descriptionTwo, descriptionThree,
//descriptionFour, Installation, Usage, Credits, License, github, email
