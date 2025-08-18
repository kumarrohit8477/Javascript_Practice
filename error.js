let a = prompt("Enter a number");
let b = prompt("Enter another number");
if (isNaN(a) || isNaN(b)) {
   throw SyntaxError("this in not allowed!")
}

let sum = parseInt(a) + parseInt(b);

try {
   console.log("The sum is:", sum * x);
} catch (error) {
   console.error("Error hai bhai !");
}
finally{
   console.log("This will always run, regardless of error.");
}
