let a = "Rohit Kumar";
let b = "Akash Kushwah";
console.log(a.replace("Rohit", "John")); // Output: "John Kumar"
console.log(a); // Original string remains unchanged
console.log(a.replace("mar", "shwah")); // Output: "Rohit Kushwah"


console.log(a.concat(b)); // Output: "Rohit KumarAkash Kushwah"
console.log(a+ " "+ b); // Output: "Rohit Kumar Akash Kushwah"

console.log(a.concat(" ",b," Hello")); // Output: "Rohit Kumar
console.log(a.concat(" " + b + " Hello")); // Output: "Rohit Kumar
let c = a.concat(b);
console.log(c); // Output: "Rohit Kumar
console.log(c.trim()); // Output: "Rohit Kumar Akash Kushwah"