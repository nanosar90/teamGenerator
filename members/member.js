//make new member
class Employee {
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
    }
    getRole() {
        return 'Employee';
    };
};

module.exports = Employee;

