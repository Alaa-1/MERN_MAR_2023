//? ---- Arrow Functions -----

//* function declaration / Named Function
// function sayHello(name) {
//     console.log("Hello " + name);
// }

// sayHello("Lucas")


//*  function Expression / anonymous function
// var sayHello = function (name) {
//     console.log("Hello " + name);
// }
//  sayHello(); 

//*  function Expression / anonymous function
// const sayHello = function (name) {
//     console.log("Hello " + name);
// }
// sayHello("Jane"); 

//*  arrow function (anonymous function)
// const sayHelloArrow = (name) => {
//     console.log("Hello " + name);
// }

// const sayHellowArrow2 = name => console.log("Hello " + name);

// 
// const sum = (a,b) => {
//     console.log("Hi");
//     return a +b ;
//  }

// setTimeout(() => {
//     console.log("Hiiiiiiii");
//   }, "4000");


//!   "this" keyword different bidning

//   function fn () {
//     console.log(this);
//   }

//   fn()


// const anotherFn = () =>{
//     console.log(this)
// }

// anotherFn()



// const sayHello = function(name) {
//     console.log('Hello ' + name);
//   };

  

// const sayArrow = (name) => {
//     console.log(`Hello ${name}`);
// }

const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick',
        cin: function(){
            console.log("1375896732");
        }
    }
}


//* Ternary Operator


const x =5;

// if (x>3){
//     console.log("It's greater than 3");
// } else {
//     console.log("it's way less");
// }


x>3 ? console.log("It's greater than 3") :  console.log("it's way less")

apiData ? apiData : "<p>Loading...</p>"