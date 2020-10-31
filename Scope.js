//===================================================================================
//Section 1
//===================================================================================
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}


console.log("Damn, you see this gal? She ran " + distance + " miles") 
/* 
What will console log?
8* running
Finished running 8 miles
error - distance not defined

Will there be an error?
Why?
yes, distance is defined only in the if scope

Will something be undefined?
Why?
no, there are no undefined values, the values give error because they're not defined 

To what scope does each variable belong?
Global or local? If local, to which specifically?
run: global
distance: local - if scope
*/
//===================================================================================//Section 2//===================================================================================
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}
/* 
What will console log?
error: cowSound is not defined

Will there be an error?
Why?
yes, because cowSound is not defined

Will something be undefined?
Why?
no, cowSound is not defined and not undefined 

To what scope does each variable belong?
Global or local? If local, to which specifically?
cowSound: local - if scope
*/
//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)
/* 
What will console log?
Served a special fish
Served a special curious cheese
Finished serving all the orders: fish,lettuce plate,curious cheese

Will there be an error?
Why?
no, the variables are used in their scopes

Will something be undefined?
Why?
no, all variables are defined

To what scope does each variable belong?
Global or local? If local, to which specifically?
order - local - for scope
allOrders - global 
*/
//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()
/* 
What will console log?
an error

Will there be an error?
Why?
yes, seed is used outside the scope its defined in

Will something be undefined?
Why?
no, the variables are not defined and not undefined

To what scope does each variable belong?
Global or local? If local, to which specifically?
pot - global
seed - local - getSeed function
*/
//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}
/* 
What will console log?
an error

Will there be an error?
Why?
yes, doesUserExist returns found which is local to the if scope only

Will something be undefined?
Why?
no

To what scope does each variable belong?
Global or local? If local, to which specifically?
users - local - to the function
u - local - for scope
found - local - if scope
userExists - global
*/
//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}
/* 
What will console log?
error

Will there be an error?
Why?
yes, reassigning a constant variable 

Will something be undefined?
Why?
no

To what scope does each variable belong?
Global or local? If local, to which specifically?
isEnough - global
i - local - for scope
*/