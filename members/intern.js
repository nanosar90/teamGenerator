const Member = require('./member.js');
const inquirer = require('inquirer');

class Intern extends Member {
    constructor (name, id, email, school ){
        super (name, id, email)
        this.school = school;
        };
        addSchool() {
            return this.school;
        }
        addRole() {
            return 'Intern';
        }
};


module.exports = Intern;