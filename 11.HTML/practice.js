//Pulse Check

//4.What are the main parts of recursion?
//start +Step+ stop

//5.Modify the countDown function to return a string of each number separated by - till it reaches 0
const countDown = function (number) {
    // console.log(number);
    if (number === 0) {
      return "0"
    }
    return number+"-"+countDown(number - 1)
  }
  countDown(10); // => "10-9-8-7-6-5-4-3-2-1-0"
countDown(3); // => "3-2-1-0"

// ==================================================================================================================

// Practice

//1.Write a function sumCubes that accepts an array and returns the sum of the cubed numbers.

const sumCubes =function (number){
    if(number.length===0){
        return 0
    }
    
return number[0]*number[0]*number[0]+sumCubes(number.slice(1))
}

// sumCubes([1, 2]); // 9
// sumCubes([1, 2, 3]); // 36
// sumCubes([5, 3, 3]); // => 179
// sumCubes([]); // => 0