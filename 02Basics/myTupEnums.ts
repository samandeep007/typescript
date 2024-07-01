// tuple is like an array but with some restrictions

// const user: (string | number)[] = ["Samandeep", 1]; //Suppose you want multiple data types in a specified order --> this is where tuples come into picture

let tUser: [string, number, boolean] 

tUser = ["Samandeep", 7, true] //You need to maintain the order of data values

// tUser = [7, "Samandeep", false]; //This is not possible

//Tuple restricts you so that you can have a order of data

// let rgb: [number, number, number] = [233,255,122, 0.5] //Only three values are allowed

type User = [number, string] //tuple type

const newUser: User = [121, "samandeep@gmail.com"];

newUser[1] = "hc.com" //There is no guarantee that the values will never change

// newUser.push(true); //Not allowed


// Tuple types are a type of array of known length and where the different elements may have different types. A value of type [number, string] is guaranteed to have a length of 2, with a number element at 0, and a string element at 1



export{}

