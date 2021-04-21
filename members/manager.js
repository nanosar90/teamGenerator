const Member = require('./member.js');
const inquirer = require('inquirer');

class Manager extends Member {
    constructor (name, id, email, number) {
        super (name, id, email)
        this.number = number;
        this.role = 'manager';
        };
};

const addManager = async () => {
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
            name: 'number',
            message: 'What is their phone number?',
        },
    ])};

module.exports = addManager;