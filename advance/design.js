// Design Patterns:
// to make a scalable project or write a thousand lines of code 
// you have to learn about design pattern

// Module Pattern (IIFE)
// Module Pattern ek design pattern chhe, jema aande code ek self executing function
// (IIFE) ni andar lakhiye chhiye, jethi variable and fnc private rahe

// in this fnc we can only retrun that values or fnc that we want to use outside

// main fecture or this pattern is data hidding(encapsulation) and clean structure,
// secure code, reusable and manageable code

// IIFE
let bank = (function(){
    let bankbalance = 10000;

    function CheckBalance() {
        console.log(bankbalance);
    }

    function SetBalance(val) {
        bankbalance += val;
    }

    function withdraw(val){
        if (val < bankbalance) {
            bankbalance -= val;
            console.log("New Balance", bankbalance);
        }else{
            console.log("Check Your Balance first, your available balance is", bankbalance)
        }
    }

    return{
        CheckBalance,
        SetBalance,
        withdraw,
    }
})();

 // in Module pattern --> we create a IIFE --> IIFE return --> we 
 // create an object that retrun function
 // Revealing Module Pattern
 // Factory Function Pattern
 // Ek function banavo chho, je objects create kare chhe (factory =   objects banava nu machine)
 // factory function pattern ek aevi design chhe jema aapade ek simple function banaviye chhiye, je nava objects create kari ne retrun kare chhe
 // aa pattern no main idea chhe --> object creation ne ek function na upyog thi control karvu
 // every time will call a factory function, tyare ek new object malse jema aapde methods and private data rakhi sakiye chhiye
 // aa pattern tyare use karva ma aave che jyare, ek j type na multiple objects create karvana hoy, jeva ke users, proucts, tasks, etc.

 function createProduct(name,price,companyName){
    let stock = 10;

    return{
        name,
        price,
        companyName,
        buy(qty){
            if(qty < stock){
                stock -= qty;
                console.log(`Booked ${name}, left stock are : ${stock}`);
            }else{
                console.error(`we don't have these many pieces. we only have: ${stock}`);
            }
        },
        refillStock(qty){
            stock += qty;
            console.log(`stock updated. New stock ${stock}`);
        },
    };
 }

 let samsung = createProduct("s26 ultra", 140000, "Samsung");
 let kitkat = createProduct("kitkat", 20, "Nestle");

 //observer pattern (basic pub-sub) (class)
 class Youtube{
     constructor(){
        this.subscribers = [];
     }

     countUser(){
        let total = this.subscribers.length;
        console.log("You Have total ", total, "subscribers");
     }
     Subscribe(user){
        this.subscribers.push(user);
        console.log(`you new subscriber ${user.name}`)
     }
 }

 class User {
    constructor(name){
        this.name = name;
    }

    update(data){
        console.log(data);
    }
 }
 let laminds = new Youtube();
 let sub = new User("test_user");