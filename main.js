
//Variables & Operators
// ex1
const maxCapacity = 14
let surfTime = true
let bestStudent 
const purposeInLife 
console.log(maxCapacity) // 14
console.log(surfTime) // true
console.log(bestStudent) // undefined
console.log(purposeInLife) // Missing initializer in const declaration
/************************************************************************/
//ex2
let strVar = "this "
strVar += "is the best thing ever"
console.log(strVar)
/************************************************************************/
//ex3
const password = "my-password"
const confirmPassword = "my-password"
console.log(password == confirmPassword)
/************************************************************************/
//ex4
console.log(423 * 12)
console.log(802 / 2)
console.log((5+6) * 3)
/************************************************************************/
//ex5
console.log((5 > 2) && false) // falsey 
console.log(!("knife" === "sword")) // truthy
console.log((1 < 2) || (-1 > -1) || !false) // truthy 
console.log("") // falsey (prints empty string)
console.log((31 % 5) == "1") // truthy 
console.log(!!true) // truthy 
console.log("5th Avenue" != "5th Avenue") // falsey
console.log(52 !== "52") // truthy
console.log((undefined || null)) // falsey (null)
/************************************************************************/
//ex6
let a = 3
a = 4
let c = 0
let b = a
b = 2
a = b
b = c
c = a
a = b // a = 0 | b = 0 | c = 2 
/************************************************************************/
