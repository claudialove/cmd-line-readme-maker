
//varibales declared for npms
var inquirer = require("inquirer");
var fs = require('fs');
var axios = require('axios');
const questions = [ 
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

];

//prompts for user input
inquirer.prompt().then(function(data) {
    //let output = empty string
    let output = "";
    output += `# ${data.gitProjectName}\n`
    output += "\n"
    output += `## ${data.gitProjectDesc}`
    output += "\n"
    output += `## ${data.gitUserName}`
    output += "\n"
    output += `## ${data.gitAssociatedEmail}`
    output += "\n"
    output += `## ${data.gitProjectUrl}`
    output += "\n"
    output += `## ${data.activities}`
    output += "\n"
    output += `## ${data.license}`
    output += "\n"
    output += `## ${data.installDepends}`
    output += "\n"
    output += `## ${data.runTests}`
    output += "\n"
    output += `## ${data.aboutRepo}`
    output += "\n"
    output += `## ${data.contributeToRepo}`
  writeToFile("reame.md", output)
    });
    
// -- They give us a writeToFile() FUNCTION, Looks like we may need to read/write to a file. What BUILT-IN node module will help us out with this (?) -- // 
function writeToFile(fileName, data) {
    // use fs to output the (google fs write to file)
}

// -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //
function init() {

}

// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();


//adding possible algorithim for workflow if this program ends up working as expected to understand where in the process it gets called once it exists


/*
INPUTS (USER)	INPUTS (SYSTEM)	OUTPUTS (USER)	OUTPUTS (sytem)
username	FUNCTION to handle response for GITHUB USER NAME	a populated readme.md	generate .md file
user email	FUNCTION to handle response for PROJECT TITLE		
URL to project	FUNCTION to handle response for DESCRIPTION		
project’s name	FUNCTION to handle response for ADD TABLE OF CONTENTS		
short description	FUNCTION to handle response for ADD INSTALLATION INSTRUCTIONS?		
license?	FUNCTION to handle response for CONTRIBUTOR LIST		
cmd to install dependencies	FUNCTION to handle response for TESTS		
cmd to run tests			
additional things to know about repo?			
additional contributors to repo?			*/

//uml chart - uses multiple columsn with actors involved - documentation

/*approach 3: 
//user runs index.js from terminal for readme-maker app
//system takes in data and formats output
//a function is called to populate the .md file
//user can use the populated readme however they like */







