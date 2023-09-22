"use strict";

function logicalOperations(bool1, bool2) {
  const andResult = bool1 && bool2;
  const orResult = bool1 || bool2;
  const notAndResult = bool1 && !bool2;
  const notOrResult = bool1 || !bool2;

  const result = {
    andResult,
    orResult,
    notAndResult,
    notOrResult,
  };
  return result;
}

const result = new logicalOperations(true, false);
console.log(result);
