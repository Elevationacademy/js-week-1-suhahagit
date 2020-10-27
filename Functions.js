//Functions
//ex1
const calcAge = function(num1, num2){
    const age = num1 - num2
    console.log(age) // prints 28
    return age
}

const age = calcAge(2017, 1989) 
//***********************************************************************************************************************************
//ex2
const calcAge = function(num1, num2){
    const age = num1 - num2
    console.log("you are either " + (age-1) + " or " + age) // prints 28
}

const age = calcAge(2018, 2015) 
//***********************************************************************************************************************************
//ex3
const isEven = function(num){
    if(num % 2 == 0){
        return true
    } else {
        return false
    }
}

let num = 67
 console.log(isEven(num)) //returns false
//***********************************************************************************************************************************
//ex4
const printOdds = function(arr){
    for(const n of arr){
        if(isEven(n) == false){
            console.log(n + " ") // prints 1,3,5,7,9
        }
    }
}

const arr = [1,2,3,4,5,6,7,8,9]
printOdds(arr)
//***********************************************************************************************************************************
//ex5
const ifExists = function(arr, index){
    for(let n of arr){
        if (n == index){
            return true
        } 
    }
     return false
}

const arr = [1,2,3]

const check = ifExists(arr, 7)

console.log(check)
//***********************************************************************************************************************************
//ex6
const calculator = {
    add: function(num1, num2){
        return num1 + num2
    },
    subtract: function(num1, num2){
        return num1 - num2
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42
//***********************************************************************************************************************************
//ex7
const increaseByNameLength = function(money, name){
    return name.length * money
}

const makeRegal = function(name){
    return "His Royal Highness" + name 
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
//***********************************************************************************************************************************