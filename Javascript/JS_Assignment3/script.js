"use strict";

class stringManipulation {
  constructor(inputArray) {
    this.inputArray = inputArray;
    this.object();
  }
  sum() {
    let summation = 0;
    this.inputArray.forEach((element) => {
      summation += element;
    });
    return summation;
  }
  average() {
    const num = this.sum() / this.inputArray.length;
    return Math.round(num * 100) / 100;
  }

  largest() {
    let large = this.inputArray[0];
    this.inputArray.forEach((element) => {
      large = Math.max(large, element);
    });
    return large;
  }
  smallest() {
    let small = this.inputArray[0];
    this.inputArray.forEach((element) => {
      small = Math.min(small, element);
    });
    return small;
  }
  uniqueNumbers() {
    let uniqueA = new Set(this.inputArray);
    return uniqueA;
  }
  sortedArray() {
    return this.inputArray.sort();
  }
  object() {
    const ans = {
      sum: this.sum(),
      average: this.average(),
      largest: this.largest(),
      smallest: this.smallest(),
      uniqueNumbers: this.uniqueNumbers(),
      sortedArray: this.sortedArray(),
    };
    console.log(ans);
  }
}
const obj = new stringManipulation([4, 2, 7, 4, 1, 9, 7]);
