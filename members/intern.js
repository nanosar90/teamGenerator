const Member = require('./member.js');
const inquirer = require('inquirer');

class Intern extends Member {
    constructor (name, id, email, school ){
        super (name, id, email)
        this.school = school;
        this.role = 'Intern';
        };
};

const addIntern = async () => {
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
            name: 'school',
            message: 'What school do they attend?',
        },
    ])};

module.exports = addIntern;