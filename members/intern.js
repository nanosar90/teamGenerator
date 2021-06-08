const Employee = require('./member.js');


class Intern extends Employee {
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