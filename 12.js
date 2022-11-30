var array1=[]
var array2=[]

var input = require('readline-sync')

for (let i = 0; i < 2; i++) {

    var name = input.question("Enter the passenger name: ")
    array1.push(name)
}

for (let i = 0; i < 2; i++) {

    var name2 = input.question("Enter the passenger destination: ")
    array2.push(name2)
}

const combined=array1.concat(array2);
console.log(combined);