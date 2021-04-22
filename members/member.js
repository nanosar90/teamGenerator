//make new member
class Member {
    constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    //return function to get values
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    };
};

module.exports = Member;

