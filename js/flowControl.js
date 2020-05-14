// Flow Contol -  allows us to make changes based on decision made user

// Loops - iterate/count thru elements. Allows for repetition of repetitive 
//          parts of code

// for loop

/*
var fruits = ['apples', 'oranges', 'grapes', 'lemons', 'bananas'];

for (var i = 0;i < fruits.length; i++) {
    console.log(i + " is the index of " + fruits[i] + ".");
}

*/

// Conditions

// If-Else Statements - set condition to do something if true or something else if it is not true.center

var number = 51985649817;

function oddEven(num){
    if (num % 2 == 0) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }
}
oddEven(number);