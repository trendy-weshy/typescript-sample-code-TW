/** 
 * @docs:
 *  simple implementation of class for displaying greetings <Greeter>
*/
class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello, world!");
document.body.innerHTML = greeter.greet();