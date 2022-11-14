const readline = require('readline-sync');
var flightFareArray = []
for(let i = 0 ; i < 10 ; i++)
{
    if(i%2==0)
    {
        flightFare = parseFloat(readline.question("Enter fares : "));
        flightFareArray.push(flightFare);
    }
    else{
        flightFareArray.push("");
    }
}
console.log(flightFareArray);