const Member = require('./member.js');
const inquirer = require('inquirer');

class Engineer extends Member {
    constructor (name, id, email, github) {
        super (name, id, email)
        this.github = github;
        };

        addGitHub() {
            return this.github;
        }
        addRole() {
            return 'Engineer';
        }
};


module.exports = Engineer;