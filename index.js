
//variables declared for npms
var inquirer = require("inquirer");
var fs = require('fs');
var axios = require('axios');
 
//prompts for user input
inquirer.prompt(
[ 
    {
        type: "input",
        name: "gitUserName",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "gitAssociatedEmail",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "gitProjectUrl",
        message: "What is your project's URL?"
    },
    {
        type: "input",
        name: "gitProjectName",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "gitProjectDesc",
        message: "Please write a short description of your project"
    },
    {
      type: "checkbox",
      message: "What kind of license should your project have?",
      name: "license",
      choices: [
        "GPL", 
        "MIT", 
        "Apache 2.0",
        "none" 
      ]
    },
    {
        type: "input",
        name: "installDepends",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "runTests",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "aboutRepo",
        message: "what does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributeToRepo",
        message: "What does the user need to know about contributing to the repo?"
    }

])
//translates response into an object (use console log to test)
.then(function(response) {
    //make an object which is equal to the response data for project name and add top level formatting
    let output = `# Project Name \n ${response.gitProjectName} \n \n` +
    `## Project Description \n ${response.gitProjectDesc} \n \n` +
    `## Author \n ${response.gitUserName} \n \n` +
    `## Author Email \n ${response.gitAssociatedEmail} \n \n` +
    `## Project Link \n ${response.gitProjectUrl} \n \n` +
    `## License \n ${response.license} \n \n` +
    `## Dependencies \n ${response.installDepends} \n \n` +
    `## Tests \n ${response.runTests} \n \n` +
    `## About Repo \n ${response.aboutRepo} \n \n` +
    `## Contributions \n ${response.contributeToRepo} \n \n`; +
    //write this data to the file
    fs.writeFileSync('readme.md', output);
});












