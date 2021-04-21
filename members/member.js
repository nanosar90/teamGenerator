//make new member
class Member {
    constructor (name, id, role, email) {
    this.name = name;
    this.id = id;
    this.role = role;
    this.email = email;
    }
    //return function to get values
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getRole () {
        return this.role;
    }
    getEmail () {
        return this.email;
    };
};

module.exports = Member;

