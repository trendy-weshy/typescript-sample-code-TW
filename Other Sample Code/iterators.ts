/**
 * for...of is an iterator that returns the values of the list
 * for...in is an iterator that returns the keys of the list
*/
let someArr = [1, 'string', false];
for (let entry of someArr) {
    console.log(entry); // 1, 'string', false
}
for (let entry in someArr) {
    console.log(someArr[entry]);
}
