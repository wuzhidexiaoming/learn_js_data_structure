function toUnderscore(string) {
  // TODO: complete
  if (typeof string !== "string") {
    return string.toString();
  }

  let strArr = string.split("");
  if (strArr.some((ele) => ele.toUpperCase() === ele)) {
    strArr.forEach((str, index) => {
      if (/[A-Z]/.test(str)) {
        if (index === 0) {
          strArr[index] = str.toLowerCase();
        } else {
          strArr[index] = ["_", str.toLowerCase()];
        }
      }
    });
    // return strArr.flat(1).join("");
    return strArr.reduce((acc, val) => acc.concat(val), []).join("");
  }
  return string;
}

console.log(toUnderscore("HelloWorldTestA"));
