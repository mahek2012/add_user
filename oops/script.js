 // Object Oriented Javascript
 // OOPS

 // dar vakhat blueprint banavo ke objectr is kevo dekhase ane shu properties ane methods hase, ane pacchi tena upyog thi nava
//  nava objects banvani sakiye chhiye tene j kevaay chhe Object
//  Oriented Programming

 // blueprint(object kevo dekhase object ma su method) --> based on blueprint create objects

 // blueprint -- constructor
//  function based contructor --> Constructor Function --> function Name always start with Capital letter

function CreatePencil(name,price,qty,color){
    this.name=name;
    this.price=price;
    this.qty=qty;
    this.color =color;
  //write
this.write=function  (msg){
   let h1 =document.createElement("h1");
   h1.textContent=msg;
   h1.style.color=color;
   console.log(this);
   document.querySelector("body").appendChild(h1);
};

 //eraser
this.erase=function  (msg){
   let h1 =document.querySelector("h1").remove();

};
}
//blue print
let pencil=new CreatePencil("Doms",100,10,"black");
let pencil1 =new CreatePencil("Natraj",100,20,"red");
console.log(pencil);

// jo construction function koi field tena prototype
// ma add attach kari de to te field badha object ma available thase
CreatePencil.prototype.shape="round";
// what is prototype: prototype is a property of function which is used to add new field to all the object created by that function




// Class in JavaScipt
// class is a syntactical sugar over construction function, class ma apde construction function no upyog kariye chhiye

//why use class :class is more readable and easier to understand than  construction function
class Createpen{
    constructor(name,price,qty,color){
        // what is constructor: constructor is a special method which is called when an object is created, it is used to initialize the object
        // why use constructor: constructor is used to initialize the object, it is called automatically when an object is created,
        // is used to set the initial values of the object
   this.name=name;
    this.price=price;
    this.qty=qty;
    this.color =color;

  //write
this.write=function  (msg){
   let h1 =document.createElement("h1");
   h1.textContent=msg;
   h1.style.color=color;
   console.log(this);
   document.querySelector("body").appendChild(h1);
    };
     //eraser
this.erase=function  (msg){
   let h1 =document.querySelector("h1").remove();

};
}
}
let pen=new Createpen("cello",100,10,"green");
let pen1 =new Createpen("reyold",100,20,"red");
console.log(pen);



// extends ---> super
// create a new class that hold old class value and also have some new values
// copy old class and add new value

class User{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
        this.role="user";
        }
}
let user =new User("test","test@gmail.com","abc1234");
console.log("user",user);

class Admin extends User{
    constructor(name,email,password,rights){
        super(name,email,password)//extends class constructer --> super

        this.role="admin";
        this.rights=rights;
    }
}
let admin =new Admin("admin","admin@gmail.com","admin1234","delte user ,edit user,create user");
console.log("admin",admin);

 // prototypal inheritance vs classical inheritance
 // classical Inheritance -- create a classes and extands their classes
 // inheritance meaning --> class to class inheritance (copy one class into anthor class)
 // prototypal inheritance --> object to object
 // ek object chhe tene tame all props/methods ne inherit kari chho ke nava object ma
 // create form that can save data into local storage with help of using OOPS (only)