//practice

//1.Figure out the syntax errors in following, and fix them.

//if (10 <= 10){}
//if(10<=10)

/* 2
if 5 > 3 {
  return "Five bigger than three"}
*/
//if(5>3){return"Five bigger than three"}

/*3.
if (false){
}
else(true){
}
if (false){
}
else if{true}
*/

/*4.
if (2 < 3 && 7 > 10)
}
if (2<3&&7>10){
  }
*/

  /*5.
if ("hello" = "hello"){
}
if("hello"==="hello"){}
*/


//===============================================================================


//2.Predict the value of the expression and explain why

true && true && false
false 
true || (true && false)
true
5 === 2 || 1 < 10
true===true
true
5 === 2 || 1 < 10
false===true
false
1 < 2 < 3
true
1 < 3 > 2
false

//=============================================================================================

//3.Check out the following examples and solve the question.


const login = function (username, password) {
  if (!(username.length > 4)) {
    return 'Invalid login information, the username length must be greater than 4';
  } else if (!(password.length >= 8)) {
    return 'Invalid login information, the password length must be greater or equal to 8';
  } else if (
    username.toLowerCase() === 'MrPotato'.toLowerCase() &&
    password === 'LonelyPotato'
  ) {
    return 'login successful';
  } else if (
    username.toLowerCase() === 'theWiseMan'.toLowerCase() &&
    password === '12345678'
  ) {
    return 'login successful';
  } else {
    return 'Invalid login information, wrong username or password';
  }
};


//=======================================================================================================================================
//Write a function isLeapYear that accepts a number argument year and returns true if the year is a leap year, leap years are divisible by 4 but non leap years are divisible by 100 for the exception of 400 (leap years are also divisible by 400)


const isLeapYear = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true
  } else {
    return false
  }
}
/*
isLeapYear(1600); // => true
isLeapYear(1604); // => true
isLeapYear(1804); // => true
isLeapYear(1904); // => true
isLeapYear(2000); // => true
isLeapYear(2004); // => true
isLeapYear(2020); // => true
isLeapYear(2104); // => true
isLeapYear(2304); // => true
isLeapYear(2400); // => true
isLeapYear(1603); // => false
isLeapYear(2021); // => false
isLeapYear(2500); // => false
isLeapYear(2600); // => false
*/


//===============================================================================================================================================================================

//5.Write a function deposit that accepts an argument amount and returns the deposited amount, the function should only accept positive number arguments otherwise return "Please enter a valid number"

const deposit = function (amount) {
  if (typeof amount === 'number' && amount > 0) {
    return amount
  }
  else{
    return 'Please enter a valid number'

  }
}

/* 
deposit(100); // => 100
deposit("100"); // => Please enter a valid number
deposit(0); // => Please enter a valid number
deposit(-4); // => Please enter a valid number
deposit(true); // => Please enter a valid number
*/

// =======================================================================================================================
// extra

// 1. write a function `startsWith` that accept two string arguments `string`, `character` and returns true if the string
// starts with that character

// حطينا تولويركيس عشان لازم يصغر الاحرف عشان يتاكد ازا بساوو بعضض
const startsWith = function (string, character) {
  if(string[0].toLowerCase()===character.toLowerCase()){
    return true
  }else{
    return false
  }
};

// 2.Write a function endsWith that accept two string arguments string, character and returns true if the string ends with that character.

const endsWith = function (string, character) {
  if(string[string.length - 1].toLowerCase()===character.toLowerCase()){
    return true
  }else{
    return false
  }
};

// 3.Write a function rockPaperScissors that accepts a string argument with only the following values, rock, paper, scissors and returns invalid move if anything else is passed and return you win, you lose, and it is a draw depending on the user input and the random selected move, read the comments for more explanation.





// 4.Write a function guessTheSquareRoot that accepts two number arguments number, squareRoot and returns a string correct if the guess is correct and returns incorrect if the guess is incorrect.

// The Math.sqrt() function returns the square root of a number,but if the number is negative it return nan
const guessTheSquareRoot = function (number, squareRoot) {
  if (Math.sqrt(number) === squareRoot) {
    return 'correct';
  }
  return 'incorrect';
};

// 5.Write a function search that accepts two string arguments string, letter and returns true if the letter is inside the string and returns false if it doesn't.

// جوا الاقواس بنحط الاشي يلي بدنا ندور فيه
const search = function (string, letter) {
  if (string.toLowerCase().search(letter.toLowerCase()) !== -1) {
    return true;
  }else{
  return false};
};
