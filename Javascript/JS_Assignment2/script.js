"use strict";

class StringOperation {
  static reversedString(str) {
    const split = str.split(" ").reverse().join(" ");
    console.log(split);

    // console.log(.toUpperCase());
  }
  vowelCount(str) {
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    console.log(count);
  }

  static isPalindrome(str) {
    reverse_str = this.reversedString(str);
    if (reverse_str === str) {
      console.log("palindrome");
    }
  }

  allFunction() {}

  //   reversed(string) {
  //     // const names = name.split(" ");
  //     // const namesUpper = [];
  //     // for (const n of names) {
  //     //   namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  //     // }
  //     // console.log(namesUpper.join(" "));
  //     // //   console.log(names.reversed());
  //     console.log(string.toUpperCase());
  //   }
}

console.log(StringOperation.reversedString("monu yadav"));
console.log(StringOperation.vowelCount("monu yadav"));
console.log(StringOperation.isPalindrome("madam"));

// const string = new StringOperation(
//   "its gona hard but hard does not mean impossible"
// );
