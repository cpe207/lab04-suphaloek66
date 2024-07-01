function typeChecker(a, b) {
    const str1 = "I LOVE YOU";
    const str2 = "NOT MATCHED";
    if(typeof a == "string" && typeof b == "string") return str1;
    if(typeof a == "number" && typeof b == "number") return a+b;
    if(typeof a != typeof b) return str2;
}

//Test cases
const a1 = "Jack";
const b1 = "Rose";
const a2 = 555;
const b2 = 100;
const a3 = "Jack";
const b3 = 100;

console.log(typeChecker(a1, b1));
console.log(typeChecker(a2, b2));
console.log(typeChecker(a3, b3));

module.exports = typeChecker;
