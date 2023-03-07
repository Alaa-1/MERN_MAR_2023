//*  ================================ Functional Programming ================================

//? callback function

// setTimeout( function() { 
//     console.log("start") 
//   }, 3000 );

//   console.log("end");

//? using the arrow function
//   setTimeout( () => {
//    console.log("start") } , 3000 );

// -----------------------------------------
function sayHelloNTimes(arr) {

    for (let i = 0; i < arr.length; i++) {

        console.log(`${arr[i]} is awesome !!`);
    }
}

// ?========= .map() =============   

const animals = ["Zebra", "elephant", "tiger", "bird"]

//    sayHelloNTimes(animals)


const result = animals.map((element) => {
    return element.toUpperCase()
})

// console.log(result);

//? ================ filter() ==================

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const nums = [99, 458, 3, 6, 425]

const filteredArr = words.filter(oneWord => oneWord.length > 5)
// console.log(filteredArr);

// -------------------------------

const filteredArr2 = words.filter(oneWord => oneWord.length > 5).map((el) => {
    return el.toUpperCase()
})


// console.log(filteredArr2);

const res = nums.pop()

// console.log(res);
// console.log(nums);

// ----------------------------------------------------

const people = [
    { name: "Bob", age: 30 },
    { name: "Mary", age: 31 },
    { name: "Sue", age: 28 },
    { name: "George", age: 38 }
];

const peopleOver30 = people.filter((person) => {
    return person.age > 30
}).map((element) => console.log(`${element.name} is ${element.age} years old`)); 


// console.log(peopleOver30);


