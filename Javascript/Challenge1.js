
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMIMark, BMIJohn;
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
const markHeigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHeigherBMI);