const readline = require('readline-sync');
var flyerPoints = 0;
var passengerName = readline.question('enter pasenger name : ');
var totalMiles = parseInt(readline.question('How many miles : '));
if(totalMiles > 10000)
{
    flayerPoints += 10;
    console.log(flayerPoints);
}
if(totalMiles > 20000)
{
    flayerPoints += 10;
    console.log(flayerPoints);

}
if(totalMiles > 50000)
{
    flayerPoints += 10;
    console.log(flayerPoints);

}
if(totalMiles > 100000)
{
    flayerPoints += 20;
    console.log(flayerPoints);

}   

