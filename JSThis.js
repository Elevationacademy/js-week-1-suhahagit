//JS This
//ex1
const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) { // added this
        this.hungry = false; // added this
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed() //should alert "I'm no longer hungry"
//************************************************************************************************
//ex2
 const pump = function (amount) {
    this.liters += amount; // added this
    console.log('You put ' + amount + ' liters in ' + this.name); // removed this
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);
//************************************************************************************************
// ex3
const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
    fuel : 1, //added fuel property
    fly: function () {
        if (this.fuel < 2) { // added this
         return 'on the ground!';
        }
        else {
        return 'flying!';
        }
  }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());
//************************************************************************************************
//ex4
const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins: function(num){
        this.coinCount -= num
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
 //************************************************************************************************
 //ex5
 const revealSecret = function () {
    return this.secret; //added this
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result); //added +
  };
  
const person = { // added person object
    avi : { //made object into property
    name: "Avi", //added ,
    secret: "Im scared of snakes!"
  }, // added ,
    narkis : { //made object into property
    name: "Narkis", //added ,
    secret: "I dont have secrets because I'm zen like that."
  }
}
  shoutIt(person.avi, revealSecret); // added person.
  shoutIt(person.narkis, revealSecret); // added person.
//************************************************************************************************
//ex6
const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      // TODO: Finish this method

    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
//************************************************************************************************