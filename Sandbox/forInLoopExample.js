// ForIN - use to iterate through properties of an object

/*
    Syntax:
            for (property in object) {
                code to loop thru;
            }
*/

var user ={
    fName: 'Some',
    lName: 'Body',
    age: 18
}
var person = '';
for(p in user){
    person += user[p] + ' ';
}

console.log(person);