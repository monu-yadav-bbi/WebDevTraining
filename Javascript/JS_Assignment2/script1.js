class stringOperations {
  stringManipulation(str) {
    const strnew = str.split("").reverse().join("");

    const strnew1 = strnew[0].toUpperCase() + strnew.substr(1);
    console.log(strnew1);

    if (strnew === str) {
      console.log("Its Palindrome");
    } else {
      console.log("Not Palindrome");
    }

    const count = str.match(/[aeiou]/gi).length;
    console.log(count);

    //Replace
    const strnew2 = str.replaceAll("e", "X");
    console.log(strnew2);
  }
}
const obj = new stringOperations();
obj.stringManipulation("monu yadav");
