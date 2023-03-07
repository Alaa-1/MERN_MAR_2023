
const myBook = {
    title: "JS is the best language",
    pages: 9001,
    author: "Netscape",
    publishYear: 1997
}
const myBook2 = {
    title: "Rust",
    pages: 5001,
    author: "Unknown",
    publishYear: 2020
}

const myBook3 = {
    title: "Dart",
    pages: 1001,
    author: "DevTeam",
    publishYear: 145
}

// create a book factory
class Book {
    constructor(title, pages, author,publishYear = 2023){
        this.title = title
        this.pages = pages
        this.author = author
        this.publishYear = publishYear
    }

}

// instantiate book
const book1 = new Book("Harry Potter", 600, "JK Rowling", 1998)
const book2 = new Book("Harry Potter 2", 601, "JK Rowling", 1999)
const book3 = new Book("Harry Potter 5", 1000, "JK Rowling")

// console.log(book1);
// console.log(book2);
// console.log(book3);


// -------------------------------------------------------


class Car {
    constructor(manufacturer, model, color, nickName){
        //  attributes
        // what the class HAS
        this.manufacturer = manufacturer;
        this.model = model; 
        this.color = color;
        this.nickName = nickName;
        this.miles = 0;
    }

    // methods
    // what the class can do
    drive(){
        this.miles += 10;
        console.log(`${this.nickName} has driven ${this.miles} miles`);
        return this;
    }
}


// create an instance


const myCar = new Car("Tesla", "Model x", "blue", "Lightning mcqueen")

// myCar.drive().drive().drive()

// ------------------------------------------------

class Tesla extends Car {
    constructor(model, color, name, autopilot= false){
        super("Tesla", model, color, name)
        this.autopilot = autopilot

    }

    drive(nickName){
        if (this.autopilot) {
            console.log("Hands Free, here we go !!");
        }
        else{
            console.log("I'm not moving");
        }
    }

    honk(otherCar){
        if(otherCar instanceof Car){
            console.log(`${this.nickName} honks at ${otherCar.nickName}`);
        } else {
            console.log("This is not a car !!!");
        }
    }

}

const model3 = new Tesla("Model3", "Red", "Tes")
const modelY = new Tesla("Model 3", "Blue", "Speedy", true)
// console.log(model3);

// model3.drive()

model3.honk(modelY)

// ------------------------------------------------------
class Airplane {
    constructor(manuf, numPassenger){
        this.manuf = manuf
        this.numPassenger = numPassenger
    }
}

const airBus = new Airplane("AirBus", 200)



model3.honk(airBus)