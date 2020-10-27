//Objects
//ex1
const p1 = {
    name: 'Jill',
    age: 29,
    city: 'Jerusalem'
}

const p2 = {
    name: 'Robert',
    age: 29,
    city: 'Tel Aviv'
}

if(p1.age == p2.age){
    
    if(p1.city == p2.city){
        console.log(p1.name + ' wanted to date ' + p2.name)
    } 
    else{
        console.log(p1.name + ' wanted to date ' + p2.name + ", but couldn't")
    }
}
//***********************************************************************************************************************************
//ex2
const myList = [{food: 'pizza', drink: 'sprite'},
                {food: 'burger', drink: 'cola'}]

myList[0].drink = 'iced-tea'
myList.splice(1, 1)

console.log(myList)
//***********************************************************************************************************************************
//ex3
const list2 =  [{food: 'pasta', drink: 'lemonade'},
                {food: 'sushi', drink: 'orange-juice'}]

myList.push(...list2)
	
console.log(myList)
//***********************************************************************************************************************************
//ex4
const library = {books: [{title: 'b1', author: 'a1'}, 
                         {title: 'b2', author: 'a2'}, 
                         {title: 'b3', author: 'a3'}]}
myList.push(...library.books)
//***********************************************************************************************************************************