
//varibales declared for npms
var inquirer = require("inquirer");
var fs = require('fs');
var axios = require('axios');

//prompts for user input
inquirer.prompt([
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

]).then(function(data) {
    console.log(data.gitUserName)
    console.log(data.gitAssociatedEmail)
    console.log(data.gitProjectUrl)
    console.log(data.gitProjectName)
    console.log(data.gitProjectDesc)
    console.log(data.activities)
    console.log(data.license)
    console.log(data.installDepends)
    console.log(data.runTests)
    console.log(data.aboutRepo)
    console.log(data.contributeToRepo)
  
    });
    


/*// -- They give us an ARRAY called 'questions' What could we do with this (?) -- //
const questions = [

];

// -- They give us a writeToFile() FUNCTION, Looks like we may need to read/write to a file. What BUILT-IN node module will help us out with this (?) -- // 
function writeToFile(fileName, data) {
}

// -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //
function init() {

}

// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();


//adding possible algorithim for workflow if this program ends up working as expected to understand where in the process it gets called once it exists


//approach 1
//step 1: user generates git repo in git (initiates readme and clone link)
//step 2: user navigates to local directory and runs git clone in terminal 
//step 3: user gets the repo with a readme.md file
//step 4: user adds the readme-maker files in the local and runs it in the terminal: answering prompts which get handled/formatted/and written to the local readme.

//apporach 2
//step 1: user generates git repo in git (initiates readme and clone link)
//step 2: before cloning the repo, user runs readme-maker files in terminal and answers questions 
//step 3: answers get handled/formatted/ and written to the git repo in git automatically
//step 4: user can clone repo locally and already populated readme gets pulled down with first clone



*/
