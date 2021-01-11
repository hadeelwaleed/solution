//pulse check
const person = { name: "hadeel", age: "17", gender: "female" };

const movie = { name: "coco", length: "60", genre: "animation" };

const favoritfood = { foods: ["shawerma"] };

const store = { name: "hd", adress: { buildingNumber, street } };

// ======================================================================

//Access the following values
// 1- access the value of the key `Mars` in the following objects:
// a- using dot notation
const orderedSolarSystem = {
  Mercery: "first",
  Venus: "second",
  Earth: "third",
  Mars: "fourth",
};
orderedSolarSystem.Mars;

// b- using bracket notation
const unorderedSolarSystem = {
  Mars: "fourth",
  Earth: "third",
  Mercery: "first",
  Venus: "second",
}; 
unorderedSolarSystem["Mars"]

//============================================================================================

// 2- access the value of key `koala` in the following object:
const animalDiet = {
    mammals: {
      cat: "carnivore",
      dog: "carnivore",
      koala: "herbivore",
    },
    fish: {
      shark: "carnivore",
    },

}
animalDiet.mommals.koalla;

// ================================================================================

// 3. add the math grade (80) to the student using dot notation
// - change the english grade to an 90 using dot notation
// - add an attribute average with the score of all three grades using dot notation

const studentOne = {
  englishGrade: 80,
  scienceGrade: 90,
};
studentOne.mathGrade = 80
studentOne.englishGrade = 90
studentOne.average = ((englishGrade+scienceGrade+mathGrade)/3)

// []   دايم بال Object
// الا ازا هي اصلا string بستعمل [""]

// assign the following variables as a key-value pair to the object, make sure to
//use the name of the variables
const objectKey = "key";
const ObjectValue = "value";

const object = {};
object.objectKey.key = 40
object.ObjectValue.value = 50

// ===================================================================================================================

// Figure out the syntax errors in the following, and fix them.

// 1
const person = (name: john, age:20)
// "John"/space
// 2
const car = {brand "Toyota", model: 2020}
// :
// 3
const employee ={name: "Jane", position: developer}
// ""

// ===================================================================================================

// 2.
// - access the age property
// - modify the person's age to be 23 years old
// - add a property called `work` with the value of an object with two keys position and salary
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
};
person.age
person.age = 23
person.work = {position:"",salary: ""}

 // - access the first name property of both employees
  // - add an employee object with your name and the position of full-stack developer
  const employees = [
    {
      id: 1,
      name: {
        first: "John",
        last: "Doe",
      },
      position: "Designer",
    },
    {
      id: 2,
      name: {
        first: "Jane",
        last: "Doe",
      },
      position: "Engineer",
    },
    {
        id: 3,
      name: {
        first: "Alex",
        last: "Smith",
      },
      position: "Full-stack Developer",
    },
  ];
  employee[0].name.first
  employees[1].name.first

   // - access the model value of both cars
  // - change the prius model from 2019 to 2020
  // - add a new car of your choice
  // - add a property `isAutomatic` for all three cars
  const cars = {
    toyota: {
      name: "prius",
      model: 2019,
      isAutomatic: true,
    },
    nissan: {
      name: "leaf",
      model: 2020,
      isAutomatic: true,
    },
    bmw: {
      name: "i8",
      model: 2020,
      isAutomatic: true,
    },
  };

  cars.toyota.model
  cars.nissan.model
  cars.bmw.model
  cars.toyota.model = 2020
  cars.lexis= {name: "hah", model:2020,isAutomatic: true}

  // =============================================================================

  // 3.Write a factory function createCar that accepts three string arguments brand, name, color and returns an object representing the car.

const createCar = function (brand, name, color) {
  return {brand:brand,name:name,color:color}
};


// ========================================================================================================================

// 4.Write a function getFullName that accepts an object representing a person and returns that person's full name in a string.

const getFullName = function (person) {
    return person.first + " " + person.middle + " " + person.last;
  };
  
// ==================================================================================================

// 5.Write a function olderThan that accepts two objects personOne, personTwo and returns a string that represent who is older than the other.

const olderThan = function (personOne, personTwo) {
   if (personOne.age > personTwo.age){
    return personOne.name + " is older than " + personTwo.name;
}
else if (personOne.age < personTwo.age){
  return personTwo.name + " is older than " + personOne.name;
}
else {
  return personTwo.name + " is as old as " + personOne.name;
}
};













