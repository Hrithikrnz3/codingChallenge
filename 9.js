const readline = require('readline-sync');
var dobArray = [];
var age = [];
for(let i=0;i<3;i++)
{
    let dob = readline.question(`enter date of birth (format - dd-mm-yyyy) ${i+1} : `);
    dobArray.push(dob);
    
}
console.log("data of birth array : ")
console.log(dobArray)

for(let i=0; i<dobArray.length;i++)
{
    let year = (dobArray[i].split('-'));
    age.push(2022-parseInt(year[2]));

}
console.log(age);

for(let i=0;i<age.length;i++)
{
    if(age[i] < 10){
        console.log("kid");
    }
    else if(age[i]>=10 && age[i]<30 )
    {
        console.log("youth");
    }
    else if(age[i]>=30 && age[i]<60 )
    {
        console.log("adult");
    }
    else
    {
        console.log("old")
    }
    
    

    
}