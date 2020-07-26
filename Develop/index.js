const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
// array of questions for user
const promptUser =
    [
      {
        type: 'input',
        name: 'title',
        message: 'What is your title?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your title!');
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is you email?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email!')
            }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is you Github username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your username!')
            }
        }
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your Github link!');
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is you descrption?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your description!')
            }
        }
      },
       {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to enter some information about installation instruction?',
        default: true
      },
      {
        type: 'input',
        name: 'install',
        message: 'Provide some installation instructions:',
        when: ({ confirmInstall }) => confirmInstall
      },
      {
        type: 'confirm',
        name: 'confirmInfo',
        message: 'Would you like to enter some usage information?',
        default: true
      },
      {
        type: 'input',
        name: 'usageInfo',
        message: 'Provide some usage information:',
        when: ({ confirmInfo }) => confirmInfo
      },
      {
        type: 'confirm',
        name: 'confirmGuidelines',
        message: 'Would you like to enter some contribution guidelines?',
        default: true
      },
      {
        type: 'input',
        name: 'guidelines',
        message: 'Provide some contribution guidelines:',
        when: ({ confirmGuidelines }) => confirmGuidelines
      },
      {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to enter some test instructions?',
        default: true
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'Provide some test instructions:',
        when: ({ confirmTest }) => confirmTest
      },
      {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Would you like to enter some credits?',
        default: true
      },
      {
        type: 'input',
        name: 'creditss',
        message: 'Provide some creditsw:',
        when: ({ confirmCredits }) => confirmCredits
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license would you like? (Check one)',
        choices: ['license preferred by the community- "https://choosealicense.com/community/"', 'MIT License- "https://choosealicense.com/licenses/mit/"', 'GNU GPLv3- "https://choosealicense.com/licenses/gpl-3.0/"'],
       
      }
     ] //.then ((selection) => {
    //     if (selection.license === choices[0]) {
    //     return "https://choosealicense.com/community/";
    // } else if (selection.license === choices[1]) {
    //     return "https://choosealicense.com/licenses/mit/";
    // } else {
    //     return "https://choosealicense.com/licenses/gpl-3.0/";
    // }
    // })


// function to write README file
function writeToFile(fileName, data) {
    
    return fs.writeFileSync(fileName, data) 
        
     
}

// function to initialize program
function init() {
    inquirer.prompt(promptUser).then(userResponses=> {
        console.log(userResponses);
        writeToFile('../README.md', generatePage({...userResponses}));
    })
    
    //console.log(generatePage({...promptUser}))
    
}

// function call to initialize program
init();

    