"use strict";
// tuple is like an array but with some restrictions
Object.defineProperty(exports, "__esModule", { value: true });
// const user: (string | number)[] = ["Samandeep", 1]; //Suppose you want multiple data types in a specified order --> this is where tuples come into picture
var tUser;
tUser = ["Samandeep", 7, true]; //You need to maintain the order of data values
var newUser = [121, "samandeep@gmail.com"];
newUser[1] = "hc.com"; //There is no guarantee that the values will never change
