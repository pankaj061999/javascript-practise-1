let fruits = ["apple", "mango", "grapes"];

// isArray ka use array ko check karne ke liye kiya jata hai ki array hai ya nhi hai

console.log(Array.isArray(fruits));

//1. push and pop method;

fruits.push("pankaj");
console.log(fruits);

// 2. pop() method

fruits.pop();
// pop() method last vale element method ko delete karta hai

console.log(fruits);

// unshift() method is method ka use array me starting me element ko add karne ke liye kiye jata hai.


fruits.unshift("roy");
console.log(fruits);

// shift()

fruits.shift();
// starting elelement ko delete kart hai hai

console.log(fruits);