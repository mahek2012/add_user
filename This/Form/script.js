let form = document.querySelector("form");
let username = document.querySelector("input[name='name']");
let role = document.querySelector("input[name='role']");
let bio = document.querySelector("input[name='bio']");
let img = document.querySelector("input[name='img']");

// methode with this keyword
const UserManager ={
    users :[],
    // font event 
    init: function(){
        // console.log("this value",this);
        form.addEventListener("submit",this.submit.bind(this));
    },
    // submit method 
    submit: function(e){
        e.preventDefault();
        console.log("form submitted");
        console.log("submit",this);//window
        this.addUser();
    },

    // add user method
addUser: function(){
    console.log("add users", this);
    this.users.push({
        username: username.value,
        role: role.value,
        bio: bio.value,
        img:img.value,
    });
    console.log(this.users);
    form.reset();
    this.renderUi();
},

    // render ui
    renderUi: function(){
        console.log(this.users);
        let div = document.querySelector(".users");
        console.log("div");
        div.innerHTML= "";

        this.users.forEach((data)=>{
        div.innerHTML += `<div class="card max-w-1/4 w-full text-center border border-blue-900 rounded-2xl p-8 my-4 mx-4 shadow-xl">
    <div class="src" alt=""></div>
    <img src="${data.img}" 
    alt="image" 
    class = "w-72 h-72 object-cover rounded-full border-2 border-blue-200" />

    <h2 class="text-3xl text-slate-500 my-2">${data.username}</h2>
    <p class="text-xl text-slate-300 my-2 font-semibold">${data.role}</p>
    <p class="text-lg text-slate-500 my-2 font-medium">
       ${data.bio}
    </p>
    </div>`
    });
    },
};
UserManager.init();
