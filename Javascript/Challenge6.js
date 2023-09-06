let bills = [125, 555, 44];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) return bill * 0.15;
    else { return bill * 0.2; }
}

let tips = [];
tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

let totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(`${totals}`);
