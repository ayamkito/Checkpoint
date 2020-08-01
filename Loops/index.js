/*
PLEASE DO NOT TOUCH THE TEST SECTION

PLEASE USE WHILE-LOOPS OR FOR-LOOPS

*/

/*
EXAMPLE

CREATE A FUNCTION THAT CONSOLE.LOGS hello world 3 times


*/

function helloWorld3Times() {
  for (var i = 0; i < 3; i++) {
    console.log('hello world');
  }
}

/*
QUESTION 1

CREATE A FUNCTION THAT ACCEPTS ONE ARGUMENT, THE NUMBER OF TIMES IT WILL CONSOLE.LOG hello world


*/

function dynamicHelloWorld(num) {
  // CODE HERE
  for(let i=0; i<num; i++){
    console.log("hello world")
  }
}

/*
QUESTION 2

CREATE A FUNCTION THAT ACCEPTS A STRING AND WILL LOG TO THE CONSOLE EACH CHARACTER OF THE STRING

*/

function logEachChar(str) {
  for(let i=0; i<str.length; i++){
    console.log(str[i])
  }
  // CODE HERE
}

/*
QUESTION 3

CREATE A FUNCTION THAT ACCEPTS TWO STRINGS. ONE STRING IS A WORD, THE OTHER STRING IS A SINGLE CHARACTER. THE FUNCTION WILL RETURN THE BOOLEAN true IF THAT CHARACTER EXISTS IN THE FUNCTION OTHERWISE WILL DEFAULT TO false

PLEASE USE LOOPS AND NOT string.indexOf()

e.g. checkIfCharExists('hello', 'l') ===> true

*/

function checkIfCharExists(str, char) {
  for(let i=0; i<str.length; i++){
    if(str[i]===char){
      return true 
    }
  }return false
  // CODE HERE
}

/*
QUESTION 4

CREATE A FUNCTION THAT TAKES TWO ARGUMENTS, A WORD AND A CHARACTER, IT THEN RETURNS THE INDEX OF THE FIRST INSTANCE OF THAT CHARACTER'S LOCATION. IF IT DOES NOT EXIST IN THE WORD RETURN -1


e.g. indexOf('hello', 'l') ===> 2

*/

function indexOf(str, char) {
  for(let i=0; i<str.length;i++){
    if(str[i]===char){
      return str.indexOf(char)
      break
    }
  }return -1
  // CODE HERE
}

/*
QUESTION 5

CREATE A FUNCTION THAT TAKES ONE ARGUMENTS, A NUMBER,  AND CONSOLE.LOGS THE NUMBERS 1 to ARGUMENT. BUT FOR MULTIPLES OF THREE CONSOLE.LOG "Fizz" INSTEAD OF THE NUMBER AND FOR THE MULTIPLES OF FIVE CONSOLE.LOG "Buzz". FOR NUMBERS WHICH ARE MULTIPLES OF BOTH THREE AND FIVE PRINT "FizzBuzz".


e.g. indexOf(15)
OUTPUT:

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz


*/

function fizzBuzz(num) {
  for(let i=1; i<=num; i++){
    if((i%3===0)&&(i%5===0)){
      console.log("FizzBuzz")
    }else if(i%3===0){
      console.log("Fizz")
    }else if(i%5===0){
      console.log("Buzz")
    }else{
      console.log(i)
    }
  }
  // CODE HERE
}

/*
QUESTION 6
CREATE A FUNCTION THAT TAKES ONE ARGUMENTS, A NUMBER,  AND FIND'S THE   nth FIBONACCI NUMBER.
THE FIBONACCI SEQUENCE STARTS WITH 1 AND 1 AND THEN THE NEXT NUMBER IS THE ADDITION OF THE PREVIOUS TWO NUMBERS.
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …



*/

function fibonacci(n) {
  let arr = []
  for(let i=0; i<=n; i++){
    if(!arr[0]&&i===0){
      arr.push(0)
    }else if(i===1){
      arr.push(1)
    }else{
      arr.push(arr[i-2]+arr[i-1])
    }
  }
  return arr[n]
  // CODE HERE
}

console.log(fibonacci(5)); 

/*
TEST SECTION, PLEASE DO NOT TOUCH




*/

const Mocha = require('mocha');

const runner = new Mocha({});

runner.addFile('./test.js');

runner.run(); 

module.exports = {
  helloWorld3Times,
  dynamicHelloWorld,
  logEachChar,
  checkIfCharExists,
  indexOf,
  fizzBuzz,
  fibonacci,
};

console.log('');
