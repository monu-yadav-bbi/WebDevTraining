// challenge:-
// Your tasks:
// 1. Loopoverthegame.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Usealooptocalculatetheaverageoddandlogittotheconsole(Wealready studied how to calculate averages, you can go check if you don't remember)
// 3. Printthe3oddstotheconsole,butinaniceformattedway,exactlylikethis:
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2 Average
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}
