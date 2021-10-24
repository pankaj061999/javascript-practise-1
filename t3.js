let age = 22;

let firstname = "pankaj";

// help of typeof we are identify data type like example: int, boolen, string;

console.log(typeof "pankaj");
 

// how to change a number to string 
// 1. hum number ke sath khali string add karke number ko string me change kar sakte hai.
console.log("before change age value type == ", typeof (age) );

age = age + "";

console.log("after change the datatype of age ==",typeof (age) );

// 2. and we can also change string to number before that number add + sign.

age = +"22";

console.log(typeof(age));

// or  simple using string() this help to be can change also typeof;

age  = String(age);

console.log("change simple method through number to string ==", typeof(age));

age = Number(age);

console.log("after change the value string to Number typeof data ==", typeof(age));


//3. string concatention 

let string1 = "pankaj";
let string2 = "meena";

let fullname = string1 + " " +  string2;

console.log(fullname);
// output is pankaj meena

// set a example how to convert string to number

let str1 = "125";
let str2 = "5";

let sum = str1 + str2;

console.log("print before convert number ==", sum);
// output = 1255

let sum1 = +str1 + +str2;

console.log("after change typeof == ", sum1);



//  template string 
// use back tick and this help we can pass the data

let usebacktick = `My name is ${string1} ${string2} and my age is ${age}.`;

console.log(usebacktick);