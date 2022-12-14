// Render all from Employee to add to Engineer
const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Engineer'
    }
    getGithub() {
        return this.github
    }
}

module.exports = Engineer