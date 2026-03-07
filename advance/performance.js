// performance-optimizations:

// bebouncing --> jyare thame koi action(events like mouse hover, input, click etc) and you don't want to fire a event or perform action(ex. like you don't want to print on console every time when you enter something in your input field)

// you define a delay and when that delay come the function will be run(you got a reaction)

let btn = document.querySelector("button");
let body = document.querySelector("body");

function changeColor(delay) {
  setTimeout(() => {
    body.style.backgroundColor = "black";
  }, delay);
}

btn.addEventListener("click", () => {
  changeColor(3000);
});

let inp = document.querySelector("input");

function print(fnc, delay) {
  let timer;
  return function (...agrs) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fnc(...agrs);
    }, delay);
  };
}

inp.addEventListener(
  "input",
  print(function () {
    console.log("debounce",inp.value);
  }, 500),
);

// throttle --> interval par chalse, action jo chalu rahe and tame ek interval set kareli che to, te interval event fire thase (chalse)

function throttlePrint(fnc, delay){
    let timer = 0;
    return function (...agrs) {
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...agrs);
        }
  };
}

inp.addEventListener(
  "input",
  throttlePrint(function () {
    console.log("Throttle",inp.value);
  }, 1000),
);

// ==== why website is slow ??======
//causes:
//RAM usage keeps increasing
//Browser tab crashes
//multiple duplicates event triggers
//Big Size Images 


//How to stop:
//1. image loading -- lazy loading
//lazy loading functions
const lazy= new IntersectionObserver(

    
)
//2. big js file
//3.reflows and repaints
//4.memory leaks 
//5.





