/**
 Bussiness Name Generator using Adjectice given below

Adjectives:
Amazing
Crazy
fire


Shop Names:
Food 
Engine
Garments

Another Word
bros
Hub
Limited

 **/

let rand = Math.random();
let rand1 = Math.random();
let rand2 = Math.random();
let first, second, third;

if (rand < 0.33) {
    first = "Amazing";
}else if (rand < 0.66 && rand >= 0.33) {
    first = "Crazy";
}else {
    first = "Fire";
}


if (rand1 < 0.33) {
    second = "Food";
}else if (rand < 0.66 && rand >= 0.33) {
    second = "Engine";
}else {
    second = "Garments";
}


if (rand2 < 0.33) {
    third = "Hub";
}else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited";
}else {
    third = "Bros";
}

console.log(`${first} ${second} ${third}`); 