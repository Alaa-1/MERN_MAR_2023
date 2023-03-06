// scope
// var name = "john";

// function sayHi() {
//     name = "bob"
//     console.log("hi " + name)
// }



// sayHi();
// console.log(name)

// var x; // undefined

// console.log(x);
// x = "john";

// console.log(
//     sayHello(x)
// )

// function sayHello(x) {
//     return "hello " + x;
// }

// -- hoisting --
// let x = 3; // act as anchors for when we declare a variable
// console.log(x);

// const y = "john";
// y = "bob";

// const myArray = [11,22,33,44, {name: "john"}, ["bob", x]];
// myArray[0] = "bob";
// myArray.push("bob");


// ---- destructuring ----
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};
// const { addresses: [,x] } = person 
const personCopy = person;
const actualCopyPerson = { ...person }
// console.log(x)

// const username = "john";

// const {username : personUsername, firstName, email} = person;
// const {username} = person;
// console.log(username)
// console.log(personUsername)
// const firstName = person.firstName;
// console.log(firstName)

// console.log(person.firstName)
// console.log(person["firstName"])



//                0        1        2        3    4 
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

//     0  1        2      3 
const [, someAnimal, , someOtherAnimal] = animals

// console.log(someAnimal, someOtherAnimal);

// rest and spread ---
console.log("---- rest / spread ----")

// pass by reference
const a = [10, 20, 30];
const b = a;
const c = [...a];

a.push(1000);
b.push(4444);
c.push(10000);

console.log(a) // ?
console.log(b) // ?
console.log(c) // ?