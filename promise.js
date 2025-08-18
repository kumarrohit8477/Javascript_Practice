console.log('this is a promise example');
let prom = new Promise((resolve, reject) => {
   let a = Math.random();
   if (a < 0.5) {
      reject("no number is supporting you")
   } else {
      setTimeout(() => {
         console.log('I am dome!');
         resolve("rohit kumar");
      }, 2000);
   }
})
prom.then((value) => {
   console.log(value);
}).catch((err) => {
   console.log(err);
});