//practice

//1.Figure out the syntax errors in the following functions, and fix them

//const myFunction = function parameter) {}
const myFunction = function (parameter) {}
//const my Second Function = function (parameter) {}
const mySecondFunction = function (parameter) {}
//const function = function (parameter) {}
const name = function (parameter) {}
//const functionName = function (paramOne paramTwo) {}
const functionName = function (paramOne ,paramTwo) {}

//==========================================================================================================================================================

//2.Write a function fullName that accepts string arguments, firstName and lastName then returns a string containing your full name combined

const fullName = function(firstName,lastName){
    return firstName+lastName 
}
//fullName("John","Doe")=>  JohnDoe     its use in consle just
//fullName("Mark","Smith")=>MarkSmith

//===========================================================================================================================================================================

//3.Write a function average that accepts two number arguments and returns the average of these numbers

const average=function(num1,num2){
    return (num1+num2)/2
}
//average(20,25)=>22.5
//average(15,7)=>11

//=====================================================================================================================================

//4.Using the defined functions below and your average function to guess the output of the following expressions

const square = function (number) {
    return number * number 
}
const cube=function(number){
    return number*number*number
}

//cube(25,20)=>625
//square(5)+cube(2)=>2
//square(10 / 5) + cube(2 + 1)=>1
//average(square(average(6, 2)), cube(4))=>40

//================================================================================================================================

//5.Write a function toThePowerOf that accepts two number arguments, base, exponent and returns the base to the exponent power.

const toThePowerOf=function(base,exponent){
    return Math.pow(base,exponent)
}
//toThePowerOf(2, 3)=>8          we dont write math.power we write math.pow
//toThePowerOf(4, 2)=>16

//============================================================================================================================================

//Extra Practice

//1.Write a function floor that accepts one number argument, number and returns the number as an integer.

const floor=function(number){
    return Math.round(number)

}
//floor(5)=>5
//floor(2.4)=>2
//floor(0.2)=>0
//floor(1.7)=>2

//===================================================================================================================

//2.Write a function calculateProfit that accepts three arguments unitsSold, unitCost, unitPrice and returns the net profit.

const calculateProfit=function(unitsSold, unitCost, unitPrice){


    return unitsSold*(unitPrice- unitCost)}
//calculateProfit(10,5,10)=>50
//calculateProfit(4, 2, 5)=> 12

//===================================================================================================================================

//3.Write a function calculateTotalBillAmount that accepts three arguments total, taxPercentage, tip and returns the total after adding the tax and the tip.

const calculateTotalBillAmount = function (total, taxPercentage, tip) {
    return(total*taxPercentage)+tip+total
  }
  //calculateTotalBillAmount(40, 0.16, 2)=>48.4
  //calculateTotalBillAmount(10, 0.16, 0)=>11.6

  
  //==============================================================================================================================================================

  //4.Write a function ageInDays that accepts a number argument ageInYears and returns the age in days (ignore leap years).

  const ageInDays=function(ageInYears){
      return ageInYears*365
    }
  //ageInDays(10)=>3650
  //ageInDays(19)=>6935


  //=====================================================================================================================================

  