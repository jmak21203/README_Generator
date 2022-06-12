// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'What does this application do?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do I install this application',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can users use your application?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are your guidelines for contributions?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do I test this application?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'fileName',
        message: 'What do you want to call this readme?',
    },
    {
        type: 'list',
        message: 'Select License',
        choices: ['MIT', 'GNU', 'Apache'],
        name: 'license',
    }

];
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.appendFile(`${fileName}.md`, data,
//         (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
// }

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)

        .then((answers) => {
            console.log(answers)
            fs.writeFileSync('readme.md', md(answers))
        })

        .then(() => console.log('Successfully created your README file!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
