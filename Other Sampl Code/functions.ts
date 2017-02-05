// #named function
function add(x,y) {
    return x+y;
}

// #anonymous function
let addOne = function (x,y) {
    return x+y;
}

// #function types
function addTwo(x: number, y: number): number {
    return x + y;
}
let AddThree = function(x: number, y: number): number { return x+y; };

// #writing full function type 
let AddFour: (baseValue:number, increment:number) => number = 
    function(x: number, y: number): number { 
        return x + y; 
    };
let AddFive: (baseValue:number, increment:number) => number =
    function(x, y) { 
        return x + y; 
    };

// #optional parameter
// add ? at the end of the parameter
// must come after required parameters
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob");                  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

// #default parameters 
function buildNameOne(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result5 = buildNameOne("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildNameOne("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildNameOne("Bob", "Adams");         // ah, just right
function buildNameTwo(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

// let result6 = buildNameTwo("Bob");                  // error, too few parameters
// let result7 = buildNameTwo("Bob", "Adams", "Sr.");  // error, too many parameters
let result8 = buildNameTwo("Bob", "Adams");         // okay and returns "Bob Adams"
let result9 = buildNameTwo(undefined, "Adams");     // okay and returns "Will Adams"

// #rest parameters
function buildNameSix(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildNameSix("Joseph", "Samuel", "Lucas", "MacKinzie");

// this in functions
// #in arrow functions
/*
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // return function() {
        //     let pickedCard = Math.floor(Math.random() * 52);
        //     let pickedSuit = Math.floor(pickedCard / 13);

        //     return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        // }
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
*/

/*let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log(("card: " + pickedCard.card + " of " + pickedCard.suit));*/

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);