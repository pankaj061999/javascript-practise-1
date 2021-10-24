// check if else condition 
// 1. and or operator

let firstname = "Harshit";
let  age =  22;

let useGuess = prompt("guess my name");

if(firstname[2] ==="r" && age>19){
    console.log(`My name is ${firstname} and my age is ${age}.`);
} else {
    console.log("when condition false");
}

// or (||) condition 


if( useGuess === firstname) {
    console.log("print my name ")
} else {
    console.log("false condtion")
}