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


*/

           /* 
                CREATE A FUNCTION THAT DETERMINES IF A NUMBER IS ODD OR EVEN.  
           */

           /*
            function oddEven(num) {                       // Declare a function named oddEven() with a parameter to receive a value.  ---  START OF FUNCTION SCOPE ---
                if(num % 2 == 0) {                          // Condition to check if an expression is true in order to run specific statements. --- START OF IF SCOPE ---
                    console.log(num + " is even.");         // Statement for when the expression is true.
                } else {                                    // --- END OF IF CONDIITON --- START OF ELSE CONDITION ---
                    console.log(num + " is odd.");          // Statement for when the expression is false.
                }                                           // ---  END OF ELSE SCOPE  ---
            }                                               // END OF FUNCTION SCOPE  ---

            oddEven(73);                          // Call the function.
            */

            /*

            var i = 10;
            while(i != 0){
                console.log("Mellow Burl");
                i--;
            }

            */


            /*
    Syntax: if ( condition to meet ) { 
                code to run if true;
            } else {
                code to run if no true;
            }
*/
// Ex.
    
    var condition = false;
    if(condition) {
        console.log(true);
    } else {
        console.log(false);
    }

    var number = 15;
    if(number < 30) {
        console.log('less than');
    }else {
        console.lot('greater than');
    }
