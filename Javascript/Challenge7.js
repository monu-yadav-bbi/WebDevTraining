const mark = {
    fullName: 'MarkMiller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        console.log(this.mass);
        console.log(this.height);
        this.bmi = this.mass / (this.height ** 2);
        // this.bmi = 78 / 1.69 ** 2;
        console.log(this.bmi);
        return this.bmi;
    }
};
const john = {
    fullName: 'JohnSmith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(john.bmi, mark.bmi);

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName} bmi (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})! `);
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} bmi (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})! `);
}

