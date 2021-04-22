const Member = require('./member.js');


class Manager extends Member {
    constructor (name, id, email, number) {
        super (name, id, email)
        this.number = number;
        };
        getNumber() {
        return this.number;
        }
        getRole() {
            return 'Manager';
        }
};



module.exports = Manager;