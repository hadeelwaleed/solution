//pulse check

//2.Define the following variables.

//- define a variable `color` containing your favorite  color
const color="red"

//-define a variable `positiveNumber`containing any positive number
const positiveNumber="12"

//- define a variable `isLoggedIn` containing a boolean value
const isLoggedIn="true"

//- define a variable `PhoneNumber` containing your phone number
const PhoneNumber ="079647628"

//============================================================================================================

//3.Reassign the value of the following variables.

//- reassign the value to `Toyota`
let myCar = "Nissan"
myCar="Toyota"

//-reassign the value to a negative number
let negativeNumber = 102
negative=-102

//- reassign the value to your name
let name 
name="hadeel"

//- reassign  the value of `a` to make the following expression equal to nine
let a
let b = 3
let c = 10
a=11

c - b * c + a

//======================================================================================================================================================================

//4.Create the following expressions.


//-create an expression to calculate the average grade for a class by using the following variables
const totalClassGrades = 877
const numberOfStudents = 10

const avgGrade = totalClassGrades / numberOfStudents


//- create an expression that represents a full name by using the following variables
const firstName = "John"
const lastName = "Doe"
const fullName=firstName+""+lastName

//- create an expression to calculate your age in seconds using the following variables 
const daysInYear = 365
const HoursPerDay = 24
const myAgeInSecond = daysInYear * HoursPerDay * 60 * 60 * 18

//==================================================================================================================================

// PRACTICE

//1.Figure out the syntax errors in the following variable declarations, and fix them.
// let @name = 'John'=>@
// let name="John =>"
// let 'age' = '10' =>''
// let age ="10" =>""
// let const = "Constant" =>const
// let jeje="Constant" =>
// let variable 1 = true =space
// let variable1=true => need space
// let num=true =>need space
// let hoho=true => need space


//2.Explain how the following variable declarations work

let a;
let b;
let c;
a = b = c = 20// => 20
a = b = c = 20 + 10//=>30
(a = b = c = 20) + 10 //=>20


const var3 = 10;
const ourFunction = function () {
  let var1 = 10;
  var2 = 10;
};

ourFunction();
var3; // => 10
var2; // => not defined
var1; // => not defined

// ===========================================================================================================================

// -Predict the value of the following variables and explain why
const d = 10;
d = 20;
d // =>20

let e = 5;
let f = e;
e = 10;
f// => 5

let h = 1;
let i = 10;
h = i + 4;
h + 20 //=>ما بنحسبها لانها ما نحفظت بال H       اما لو انها = كان حفظناها       
i = h + 10;
h // => 14
i // => 24


// ================================================================================================================
// Write a function addToList that accepts a string argument toDo and returns the current list as a string, every time we invoke the function it should return the old toDo item + the new one

let allList = ''
const addToList = function (toDo) {
  if (allList === '') {
    allList = allList + toDo
  } else {
    allList = allList + ' ' + toDo
  }
  return allList
}


// Write two functions deposit and withdraw that accepts a number argument amount and returns the current account balance


let currentBalance = 0
const deposit = function (amount) {
  currentBalance = currentBalance + amount
  return currentBalanc
}

const withdraw = function (amount) {
    currentBalance = currentBalance - amount
    return currentBalance
  }
  