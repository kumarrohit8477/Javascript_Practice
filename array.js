let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // Output: 1
console.log(arr.length)


arr[4] = 10; // Changing the last element
console.log(arr); // Output: [1, 2, 3, 4,10]

console.log(arr[5]); // Output: undefined, as index 5 does not exist


arr[5] = 6; // Adding a new element at index 5
console.log(arr); // Output: [1, 2, 3, 4, 10, 6]
console.log(arr.length); // Output: 6

arr.push(7); // Adding an element at the end
console.log(arr); // Output: [1, 2, 3, 4, 10, 6, 7]
console.log(arr.length);
arr.pop(); // Removing the last element
console.log(arr); // Output: [1, 2, 3, 4, 10, 6]
console.log(arr.length);