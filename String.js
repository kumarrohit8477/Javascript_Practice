let a = "Rohit";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a.length);
console.log(a[5]); // undefined, as index 5 does not exist

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
let i = 0;
while(i< a.length) {
    console.log(a[i]);
      i++;
}

let b = "Rohit";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.indexOf("h"));
console.log(b.split("o"));
