//union is a combination of two or more data types
var score = 33; //You may not be sure whether it is going to be a number all the time --> A simple pipe can do wonders for you
score = 213;
score = "Samandeep Singh";
console.log(score);
var saman = {
    name: "Samandeep Singh",
    id: 231
};
saman = {
    username: "samandeep0792",
    id: 231
};
// function getDbId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is ${id}`)
// } 
function getDbId(id) {
    if (typeof id === "string")
        id.toLowerCase(); //toLowerCase doesn't exist on type number --> type: number | string
    if (typeof id === "number")
        id + 2;
}
//array
var data = [1, 2, 3]; //This is problematic --> const array_name : dataType[] = [array..]
var data2 = ["1", "2", "3"];
// const data3: string[] | number[] = [1,2,3,"4"] //You cannot have some values of each data type --> either have all numbers or all strings
var data4 = [1, 2, 3, "4", true]; //Now you can have both strings and numbers in the array --> bad practice
var pi = 3.14; //pi can only have a value of 3.14
// pi = 3.134; //this will show you a red line
var seatAllotment; // Only these seats can be alloted to passengers
seatAllotment = "aisle";
// seatAllotment = "crew" //Not possible
getDbId(3);
getDbId("4");
