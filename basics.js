// Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
// Call the function with two numbers as arguments.
function functionWithArgs(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber
    console.log('sum is: ', sum);
}

functionWithArgs(1,5)
functionWithArgs(5,9)



// push
//  to add strings, numbers or even array
const myArray = ["2", 7, "dog"];
console.log(myArray);
const addArray = myArray.push(3, [5, "7", "9"]);
console.log('addArray: ',myArray);
// [ '2', 7, 'dog', 3, [ 5, '7', '9' ] ] 


// .pop() is used to pop a value off of the end of an array. 
// We can store this popped off value by assigning it to a variable. 
// In other words, .pop() removes the last element from an array and returns that element.

const removeLastArray = myArray.pop();
console.log('AfterRemove: ', myArray);
// [ '2', 7, 'dog', 3 ]


//  If you want to remove the first, you use shift
const removeFirstItem = myArray.shift()
console.log('removeFirstItem:',myArray);


// Unshift works like push, but this time the item is added to the first of the array
myArray.unshift("Tayo")
console.log(myArray);