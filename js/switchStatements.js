// Switch Statments - gives multiple outcomes base on the a value of condition

/*
    Syntax:
        switch(condition){
            case 1:
                code to run;
                break;
            case 2:
                code to run;
                break;
            case 3:
                code to run;
                break;
            default:
                code to run;
                break;
        }
*/

// Ex

        var seasons = 'green';
        switch (seasons){
            case 'summer':
                console.log('It\'s summer!');
                break;
            case 'fall':
                console.log('It\'s fall!');
                break;
            case 'winter':
                console.log('It\'s winter!');
                break;
            case 'spring':
                console.log('It\'s spring!');
                break;
            default:
                console.log('There are only 4 seasons!');
                break;
        }

        