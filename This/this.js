// this Keyword
// this keyword special keyword in javascript beacuse of this keyword we can access the properties and methods of an object
// this keyboard is used to refer to the current object
// this keyword is useful when we have to access the properties and methods of an object inside a method of that object
// this keyboard context is determined by how a function is called (that is the reason why this keyword is called dynamic scope) (this ni value this nu use kaya context ma che te par depend kare chhe)

//global context
console.log("global",this); //window

//function es5 context

function abc(){
    console.log("function",this);
}
abc(); //window

//function es6 context

let bcd =()=>{
    console.log("fnc ES6",this);
};
bcd();//window

// method context
// method --> function in object
// 1. method --> fnc es5

let a = {
    name: "test1",
    age: 25,
    write: function () {

        // method --> ek function je koi object ni under hoy tene method kevay.
        // // this --> give object
        // // if you use arrow function then this key give you windows object
        // because arrow function does not have its own this
        // keyword it takes this value from its parent scope

        // // if you create one more function inside method then this
        // looses her value --> solution --> you have to create a arrow
        // function
        console.log("method fnc es5:", this);
    },
}
// 2. method --> fnc es6
let b = {
  name: "test",
  age: 25,
  write: () => {
    console.log("method -- fnc es6", this);
  },
};

b.write(); // window


// 3. method --> fnc es5 ==> fnc es5
let c = {
  name: "test",
  age: 25,
  write: function () {
    function abc() {
      console.log("method -- fnc es5 ==> fnc es5", this);
    }
    abc();
  },
};

c.write(); // window


// 4. method --> fnc es5 ==> fnc es6(arrow function)
let d = {
  name: "test",
  age: 25,
  write: function () {
    let bcd=()=> {
      console.log("method -- > es5 ==>  es6", this);
    }
    bcd();
  },
};

d.write(); // window

//event handler context
document.querySelector("h1").addEventListener("click",function()
{
    console.log("Event handler",this);
}); //this value =html element

//class context
class Person{
    constructor(){
        this.username="test";
        this.email="test@gmail.com";
        console.log("class context",this);
    }
}
let p1=new Person();
console.log(p1);

//context --> this keyword value
//global context -->window
//function context -->window
//method context with es 5 fnc -->object
//method context with es 6 fnc -->window
//arrow function inside es5 fnc --> object
//es5 fnc inside es5 fnc -->window
//event handler context --> html element
//class --> blank object

// Manual Binding
// call, apply, bind
// function ne call karti vakhate this keyword ni value set karva mate call, apply, bind method no upyog kariye chhiye

let obj5 = {
  name: "test10",
  email: "a@a.com",
}; // save this obj. into this keyword

function temp_a() {
  console.log(this);
}

// function.call(object_name) --> this keyword ni value set karva mate call method no upyog kariye chhiye
// temp_a.call(obj5);

// function.apply(object_name) --> this keyword ni value set karva mate apply method no upyog kariye chhiye
// temp_a.apply(obj5);

// function.bind(object_name) --> this keyword ni value set karva mate bind method no upyog kariye chhiye
let fnc = temp_a.bind(obj5);//blank object create 
fnc();
//console.log(fnc);