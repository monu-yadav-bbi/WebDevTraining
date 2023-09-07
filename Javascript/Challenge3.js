"use strict";
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
*/

let dolphins;
let koalas;
let scoreDolphins, scoreKoalas;

const avgScoreDolphins = (96 + 108 + 89) / 3;
const avgScoreKoalas = (88 + 91 + 106) / 3;

if (avgScoreKoalas < avgScoreDolphins && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (avgScoreKoalas > avgScoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas > 100
) {
  console.log("Both win the trophy 🥳");
} else {
  console.log("No One Win the Trophy 😭");
}
