// Objects

/*
        Objects are variables that store multiple values
        The values can be of different type.
        The values stored in objects are called 'properties' and 'methods'.
*/

        // Ex. 01

            var person = {
                fName: 'tom',
                lName: 'thompson',
                age: 29,
                isMarried: true,

                displayFullName: function() { return this.fName + " " + this.lName; }
            };
/*
        In the above example we define a person object
        The person object has properties that store the first and last names 
        as well as properties that store the age and married status.
        The method 'displayName' is a function that combines the first and
        last names.

        Object provide the ability to model/represent real world objects
        programmatically.
*/
        // Ex. 02

            var car = {
                make: 'Dodge',
                model: 'Viper',
                year: '1992',

                startEngine: function() { return 'engineStarted'; }
            }

            console.log(x3.displayFullName());

            
/*
    Syntax:
        begin with a variable keyword; 'var'
        followed by the name of the object
        then the assignment operator '='
        and lastly curly braces for properties and methods; '{}'

    Properties and Methods:
        properties and methods are the same as variables and functions
        they are defined with name:value pairs: 
        instead of the '=' assignment operator the ':' is used
        it would be the same for methods/functions
        with methods, the name is written before the 'function' keyword
        the 'this' keyword is used to referrence the current object
*/