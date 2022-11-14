const readline = require('readline-sync');
// var nameArray = []
// //inputing data into the array
// for(let i=1;i<=4;i++){
//     nameData = (readline.question(`Enter Name ${i} : `));
//     nameArray.push(nameData);
// }
// console.log("original array : ")
// console.log(nameArray);
// var dupnameArray = [...nameArray];
// var temp = ""
// // sorting in ascending order
// for(let i=0;i<nameArray.length;i++){
//     for(j=0;j<nameArray.length-i-1;j++){
//         if(nameArray[j]>nameArray[j+1])
//         {
//             temp=nameArray[j];
//             nameArray[j]=nameArray[j+1];
//             nameArray[j+1]=temp;
//         }
//     }
// }
// console.log("accending order : ")
// console.log(nameArray);

// // sorting in decending order
// for(let i=0;i<nameArray.length;i++){
//     for(j=0;j<nameArray.length-i-1;j++){
//         if(nameArray[j]<nameArray[j+1])
//         {
//             temp=nameArray[j];
//             nameArray[j]=nameArray[j+1];
//             nameArray[j+1]=temp;
//         }
//     }
// }
// console.log("decending order : ")
// console.log(nameArray);

// // search a name
// var searchName = readline.question("enter name to search : ");
// var flag=0
// for(let i=0;i<dupnameArray.length;i++)
// {
//     if(dupnameArray[i] == searchName)
//     {
//         console.log("Array : ");
//         console.log(dupnameArray)
//         console.log(`${searchName} found in index ${i}`);
//         flag=1;
        
//     }
//     if(flag=0)
//     {
//         console.log("element not found!!");
//     }
// }


// // length of each elements
// console.log("length of each elements : ")
// for(let i=0;i<dupnameArray.length;i++)
// {
//     console.log(`${dupnameArray[i]} = length ${dupnameArray[i].length}`)
// }

// // spliting 
// console.log("spliting : ")
// for(let i=0;i<dupnameArray.length;i++)
// {
//     let name = dupnameArray[i].split(' ');
//     console.log(name);
// }

//find duplicate elements


var nameArray = [];
for(let i=0;i<=4;i++)
{
    var namedata = readline.question("enter name : ");

    nameArray.push(namedata);

}

console.log(nameArray);
let flag = 1;
var dupelements=[];
for (let i = 0; i < nameArray.length; i++)
{
    for (let j = i+1; j < nameArray.length; j++)

    {
            if(nameArray[i] == nameArray[j])
            {
                flag=1;
                dupelements.forEach(e=>{
                    if(e == nameArray[i])
                    {
                          flag = 0;
                    }   

                })

                if(flag){

                    dupelements.push(nameArray[i]);

                }
            }
    }
}  
console.log("duplicate elements : ")
console.log(dupelements);

