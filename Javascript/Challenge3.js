/* Write your code below. Good luck! 🙂 */

let dolphins
let koalas
let scoreDolphins, scoreKoalas


const avgScoreDolphins = (96 + 108 + 89) / 3;
const avgScoreKoalas = (88 + 91 + 106) / 3;

if (avgScoreKoalas < avgScoreDolphins && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (avgScoreKoalas > avgScoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas > 100) {
    console.log('Both win the trophy 🥳');
} else {
    console.log('No One Win the Trophy 😭')
}



