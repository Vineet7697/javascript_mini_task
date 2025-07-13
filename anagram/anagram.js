
// function Anagram(str1,str2){
//     let sorted1=str1.split('').sort().join('');
//     let sorted2=str2.split('').sort().join('');
    
//     return sorted1 === sorted2;
// }

// let str1="listen";
// let str2="silent";
// if(Anagram(str1,str2)){
//     console.log("anagaram");

// }
//     else{
//     console.log("not anagram");
// }

let Anagram=()=>{
    let str1="listen";
    let str2="silentt";
    
    let sort1=str1.split('').sort().join('')
    let sort2=str2.split('').sort().join('')
  
if(sort1===sort2){
    console.log("anagram")
}
else{
    console.log("not anagram")
}
}
Anagram()

// let Anagram=()=>{
//     let str1=prompt("enter first string:")
//     let str2=prompt("enter second string:")

//     let sort1=str1.split('').sort().join('')
//     let sort2=str2.split('').sort().join('')
// if(sort1===sort2){
//     console.log("anagram")
// }
// else{
//     console.log("not anagram")
// }
// }
// Anagram()



// pass by value
// let a = 10;

// function changeValue(x) {
//     x = x + 5;
//     console.log("Inside function:", x);  // 15
// }

// changeValue(a);
// console.log("Outside function:", a);


// pass by reference
// let obj = { name: "John" };

// function update(objRef) {
//     objRef.name = "Vineet";
// }

// update(obj);
// console.log(obj.name); 