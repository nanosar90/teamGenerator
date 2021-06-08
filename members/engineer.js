const Employee = require('./member.js');


class Engineer extends Employee {
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