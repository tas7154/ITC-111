// Strings

// string methods

var str = 'this is a string';

// length method - returns the size of a string
    
    var strLen = str.length;

// indexOf method - get the position of a character in a string.
    
    var strIdx = str.indexOf('g');

// slice method - get a substring or specified portion of a string.

    var strSlice = str.slice(5,7);

// toUpperCase & toLowerCase methods - change the case of a character in a string.

    var strUpper = str.toUpperCase();
    var strLower = str.toLowerCase();

// replace method - replace a specified character in a string.

    var strRpl = str.replace('a', 'our');

// console.log(strRpl);

string methods

There are some useful fucnctions or methods built-in to strings that can be used to manipulate strings
such as finding the length, joining and splitting strings, changing characters within a string, and more.

var  str = 'this is a string';

Length method - get the size of a string:

    str.length;

square bracket notation [0] - get a specific character in a string:

    str[0];

indexOf method - get the position of character in a string

    str.indexOf(a);

slice method - get a substring or specified porttion of a string:

    str.slice(5,8);

toUpperCase & toLowerCase -  change the case of a string or string character:

    str.toUpperCase();
    str.toLowerCase();

replace method - replace character/s of a string:

    str.replace('a', 'our');
