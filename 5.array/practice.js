//Pulse Check

//1.Define the following arrays.

// 1- define an array `colors` containing your favorite three colors
const colors = ["red", "blue", "pink"];
// 2- define an array `negativeNumbers`containing negative numbers
const negativeNumbers = [2, 4, 6];
// 3- define an array `food` containing three of your favorite foods
const food = ["shawerma", "pizaa", "burger"];
// 4- define an array `numbers` containing two arrays, the first containing three odd numbers and
// the second containing four even numbers
const numbers = [1, 3, 5][(4, 8, 2, 10)];

//======================================================================================

//Access the following values.

// 1- access the value `Mars` of the following arrays using the index
const orderedPlanets = ["Mercery", "Venus", "Earth", "Mars", "Jupiter"];
orderedPlanets[3];
//"mars"
const unorderedPlanets = ["Mars", "Earth", "Mercery", "Jupiter", "Venus"];
unorderedPlanets[0];
//"Mars"

// 2- access the `Koala` value of the following arrays using the `length` property
const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
animals[4];
//"koala"

//  3- access the  middle value of the following array using the `length` property or the index
const cars = ["Ford", "BMW", "Ferrari", "Mercedes", "Subaru"];
cars.length;

//  4- define an array `numbers` containing two arrays, the first containing three odd numbers and
// the second containing four even numbers
const number = [[1, 5, 3][(2, 4, 6, 8)]];

//============================================================================

//2. Access the following values.

//- access the value `Mars` of the following arrays using the index
const orderedPlanets = ["Mercery", "Venus", "Earth", "Mars", "Jupiter"];
orderedPlanets[3];
const unorderedPlanets = ["Mars", "Earth", "Mercery", "Jupiter", "Venus"];
unorderedPlanets[0];

//====================================================================================================

// Assign the following values to the corresponding array.

// - Assign the value `Mars` to end of the following arrays (don't replace `Jupiter` and `Mercery`)

// a- use the `length` property
const orderedPlanets = ["Mercery", "Venus", "Earth", "Jupiter"];
orderedPlanets[orderedPlanets.length] = "Mars";

// b- dontuse the `length` property
const orderedPlanets = ["Mercery", "Venus", "Earth", "Jupiter"];
orderedPlanets.push("mars");

// 2- Assign the `Koala` to the start of the following array (replace `Cat`)
// use the index
const animals = ["Cat", "Dog", "Dolphin", "Squirrel"];
animals[cat] = [Koala];

//  3- Assign the value `Toyota` to the middle of the following array using the `length` property(replace `Ferrari`)
const cars = ["Ford", "BMW", "Ferrari", "Mercedes", "Subaru"];
cars[cars.split(2).length] = "Toyota";

// ================================================================================================================================

// 1.write a function `reverseWords` that accepts a string argument and returns the same string if only
// one word was passed in, and if more than one is passed it will return a string of the words in a reverse order

const reverseWords = function (string) {
  return string.split(" ").reverse();
};

// ================================================================================================================================

// 2.Write a function addToLast that accepts two arguments an array, value and returns an array with the value added to the end of the array while using unshift instead of push

// do not use `push` or array assignments, only `unshift`
const addToLast = function (array, value) {
  array.reverse();
  array.unshift(value);
  return array.reverse();
};

//   ====================================================================================================================

// 3.// write a function `getLength` that accepts an array and returns the
// length of the array without using the array's attribute `length`

const getLength = function (array) {
  return array.push() - 1;
};

// write a function `getFirstVal` that accepts an array and returns the
// first value of the array without using the index to access the value

const getFirstVal = function (array) {
  return array.shift()
};
 
// =============================================================================================================

// 4.Write a function updateOrCreate that accepts three arguments an array, value, index and returns an updated array, check the output for more information on the updated array





// ======================================================================================================================================

// 5.  Write a function `sliceArray` that accepts three arguments an ordered numeric `array` (unique numbers), `startVal`, `endVal`
// and returns an array starting at the `startVal` and ending at `endVal`

