const Member = require('./member.js');
const inquirer = require('inquirer');

class Engineer extends Member {
    constructor (name, id, email, github) {
        super (name, id, email)
        this.github = github;
        this.role = 'Engineer';
        };
};

const addEngineer = async () => {
    return await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this team member?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github username?',
        },
    ])};

module.exports = addEngineer;