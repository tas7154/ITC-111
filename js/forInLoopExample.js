// ForIn Loop - used to loop/iterate through properties of an object

// Syntax: for(property in object) {do stuff;}


var user = {
    fName:"John",
    lName:"Johnson",
    age:21
};

var details = '';
var p;

for (p in user){
    details += user[p] + " ";
}
console.log(details);