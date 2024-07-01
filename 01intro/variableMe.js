"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Samandeep Singh";
//General syntax: let variableName: type = value
// greetings = 6; --> Type number is not assignable to the type string --> Type safety
console.log(greetings);
var myNum = 6;
// myNum.toUpperCase(); //method toUpperCase() doesn't exist on the type number
//colan and the type is what you need to remember for now
// number
//let userId: number = 12323; //is a number and should always be a number
// When you're declaring and initializing a variable in the same line, there is not need to specify the type of the variable, typescript is smart enough to do that for you
var userId = 2323.24;
// boolean
var isLoggedIn = false; //: means infer
