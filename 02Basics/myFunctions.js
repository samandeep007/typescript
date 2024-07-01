function addTwo(num) {
    // num.toUpperCase(); //this is not allowed -> mischeive things not allowed
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(6); //this is again wrong here --> any sucks!!!!
addTwo(4); //any is problemetic here
getUpper("Saman");
console.log(getUpper("deep"));
function signUpUser(name, email, isPaid) {
}
// signUpUser(1,2,3); //defeats the benefit of using typescripy
signUpUser("Samandeep", "Samandeep0792@gmail.com", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; //providing it a default value
loginUser("Saman", "h@h.com"); //isPaid is not provided
