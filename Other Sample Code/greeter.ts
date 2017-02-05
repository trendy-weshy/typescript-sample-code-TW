
class Student {
    fullname: String;
    constructor(public firstName, public middleIntial, public lastName) {
        this.fullname = `${firstName} ${middleIntial} ${lastName}`;
    }
}

interface Person {
    firstName: string,
    lastName: string
}

var user = {
    firstName: 'John',
    lastName: 'Waweru'
};

function greeter(person: Person) {
    return `Hello ${person.firstName}, ${person.lastName}`;
}

document.body.innerHTML = greeter(user);