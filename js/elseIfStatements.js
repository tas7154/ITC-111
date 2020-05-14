// Else-If Statements - adds additional condition to the If-Else statement

/*
    Syntax:
            if (primary condition to meet) {
                code to run if first condition is met;
            } else if (secondary condition to meet){
                code to run if first condition is not met but second condition is met;
            } else {
                code to run if none of the above conditions are met;
            }
*/

// Ex
        var number = 20;
        if(number < 10) {
            console.log('less than');
        } else if (number == 10) {
            console.log('equal to');
        } else {
            console.log('greater than');
        }
            