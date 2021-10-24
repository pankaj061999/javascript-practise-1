let firstName = " Pankaj ";

console.log(firstName.length);
console.log("before trim string show space ===", firstName);

// how to remove spaces in the string help of trim()

let trimfirstName = firstName.trim();

console.log(trimfirstName);
console.log(trimfirstName.length);

// how to change charcter upper or lower

firstName = firstName.toUpperCase()

console.log("we can change in exsiting string value == ", firstName);

console.log("after change size of string ", trimfirstName.toUpperCase(), trimfirstName.toLowerCase());

// use slice() method 

let newString = firstName.slice(0, 3);

console.log("after useing slice method == ", newString)