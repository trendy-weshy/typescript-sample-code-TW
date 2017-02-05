var Student = (function () {
    function Student(firstName, middleIntial, lastName) {
        this.firstName = firstName;
        this.middleIntial = middleIntial;
        this.lastName = lastName;
        this.fullname = firstName + " " + middleIntial + " " + lastName;
    }
    return Student;
}());
var user = {
    firstName: 'John',
    lastName: 'Waweru'
};
function greeter(person) {
    return "Hello " + person.firstName + ", " + person.lastName;
}
document.body.innerHTML = greeter(user);
