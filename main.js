
//Conditional Statements
// ex1
let numChildren = 3
const isCareful = false
if(!isCareful){
    numChildren++
}
console.log(numChildren) // 4
/************************************************************************/
//ex2
const silverwareCount = 9
if(silverwareCount % 2 != 0){
    console.log("there is something missing")
}
/************************************************************************/
//ex3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
if(performance == "stellar"){
    salary += stellarBonus
}else if(performance == "good"){
    salary += goodBonus
}
/************************************************************************/
//ex4
const isVIP = false
let cash = 500
if (isVIP || (cash > 300)){
    console.log("welcome with a nice greeting")
}else{
    console.log("bubye")
}
/************************************************************************/
//ex5
const a = 3
let b = 2
let c = 0 || 12
let d
b = c
b++
if(d){
  b = a
}
d = a + (b * c)
d++
b += 2 // a = 3 || b = 15 || c = 12 || d = 160 
/************************************************************************/
//ex6
const gender = null
let profession = "business"
if(gender == 'male'){
    profession += "man"
}else if(gender == 'female'){
    profession += "woman"
}else{
    profession += "person"
}
console.log(profession)
/************************************************************************/
//ex7
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
if(boughtTesla && isUSCitizen){
    if((currentYear - yearOfTeslaPurchase) >= 4){
        console.log("would you like an upgrade?")
    }else{
        console.log("are you satisfied with the car?")
    }
}else if(boughtTesla){
    console.log("wanna move to the US?")
}else if(!boughtTesla){
    console.log("wanna buy one?")
}
/************************************************************************/
