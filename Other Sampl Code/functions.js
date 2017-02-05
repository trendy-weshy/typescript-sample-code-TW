// #named function
function add(x, y) {
    return x + y;
}
// #anonymous function
var addOne = function (x, y) {
    return x + y;
};
// #function types
function addTwo(x, y) {
    return x + y;
}
var AddThree = function (x, y) { return x + y; };
// #writing full function type 
var AddFour = function (x, y) {
    return x + y;
};
var AddFive = function (x, y) {
    return x + y;
};
// #optional parameter
// add ? at the end of the parameter
// must come after required parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
// #default parameters 
function buildNameOne(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result5 = buildNameOne("Bob"); // works correctly now, returns "Bob Smith"
var result2 = buildNameOne("Bob", undefined); // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result4 = buildNameOne("Bob", "Adams"); // ah, just right
function buildNameTwo(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
// let result6 = buildNameTwo("Bob");                  // error, too few parameters
// let result7 = buildNameTwo("Bob", "Adams", "Sr.");  // error, too many parameters
var result8 = buildNameTwo("Bob", "Adams"); // okay and returns "Bob Adams"
var result9 = buildNameTwo(undefined, "Adams"); // okay and returns "Will Adams"
// #rest parameters
function buildNameSix(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildNameSix("Joseph", "Samuel", "Lucas", "MacKinzie");
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
