// pulse check

//1.What are the three main parts of loops?
// a starting point, a step, and a run condition
// 2.Create a while loop with the starting value of 0 and end value of 5 and console log all numbers in between including the start and end.

let i=0;
While (i<6){
    comsole.log(i)
    i++
}
// 3.Create a for loop with the starting value of 10 and end value of 20 and console log all numbers in between including the start and end.
for (let i = 10; i < 21; i++) {
    console.log(i);
  }
//   4.Create a for in loop that works on the following object and console log both the key and value.
const object = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
  };
//   هون الكي بنقدر نسميها اي اشي
for (key in object) {
    console.log(key, object[key]);
  }
//   ============================================================================================================================

//1.Write a function sum that accepts an array of numbers and returns the sum of the numbers.
//  (+=) adds the value of the right operand to a variable and assigns the result to the variable   بتضيف قيمة اليمين عاليسار وبتساويها
// Operator: x += y  Meaning:  x  = x + y

const sum = function (numbers) {
  let sum = 0
  for (let i =0; i < numbers.length; i++){
    sum += numbers[i]
  }
  return sum
};

// sum([1, 2, 3, 4, 5, 6]); // => 21

// 2.Write a function onlyOddNumbers that accepts an array of numbers and returns a new array with only the odd numbers.
// الرقم ازا باقي قسمته علي2 يساوي 0 معناته هو فردي
const filter = function (numbers) {
  let oddNumbers=[]
  for (let i =0; i < numbers.length; i++){
    if (numbers[i] % 2 !== 0){
      oddNumbers.push(numbers[i])
    }
  }
  return oddNumbers
};

// filter([0, 1, 2, 3, 4, 5, 6]); // => [1, 3, 5]

// =======================================================================================================================

// 3.Write a function maximumNumber that accepts an array of numbers and returns the max number in the array.
// POSITIVE NUMBER; // => Infinity الارقام يلي اكبر من 0
// NEGATIVE NUMBER; // => -Infinity
// حطينا سالب لانه ممكن يكون اكبر رقم سالب فبنرجعه بدون اشارته
const maximumNumber = function (numbers) {
let maxNumber = -Infinity 
for (i=0;maxNumber>numbers.length;i++){
  if (numbers[i]>maxNumber){
    maxNumber = numbers[i]
  }
}
return maxNumber
};
// maximumNumber([0, 5, 2, 10, 8, 6]); // => 10

// ===================================================================================================================================

// 4.Write a function totalBill that accepts an object representing separate bills and returns the sum of all bills.

// Make sure to loop over the bills object
const bills = {
  waterBill: 25,
  electricityBill: 50,
  hospitalBill: 1000,
};



// totalBill(bills); // => 1075

// ========================================================================================================================================

/* 5.Write a function validateMessage that accepts an object representing a message and return
 the object if it is valid and after removing any extra keys, the message will consist of three keys username, message
 , date with all of their values as strings return the object only if all three keys are strings, if the number of keys 
 is more than three then delete the extra keys, if the message doesn't have the right data type then return invalid message*/




//  ======================================================================================================================================

// 1.Write a function onlyEven that accepts an array of numbers and returns the same array with only the even numbers.

// make sure to use the same array

const onlyEven = function (numbers) {
  for (let i=0;;i++)
  if (numbers[1] %2 !== 0 ){
    return numbers
  }
};
// onlyEven([0, 1, 2, 3, 4, 5, 6]) // =>[0, 2, 4, 6]
// onlyEven([1, 9, 2, 3, 4]) // => [2, 4]

// ====================================================================================================================================

// 2.Write a function sort that accepts an unordered array of numbers and returns the same array in a descending order.

