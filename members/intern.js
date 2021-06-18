const Employee = require('./member.js');


class Intern extends Employee {
    constructor (name, id, email, school ){
        super (name, id, email)
        this.school = school;
        };
        addSchool() {
            return this.school;
        }
        getRole() {
            return 'Intern';
        }
};


module.exports = Intern;