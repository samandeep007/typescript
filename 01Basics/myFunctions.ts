function addTwo(num: number){
    // num.toUpperCase(); //this is not allowed -> mischeive things not allowed
    return num+2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

// getUpper(6); //this is again wrong here --> any sucks!!!!
addTwo(4); //any is problemetic here

getUpper("Saman");
console.log(getUpper("deep"));

function signUpUser(name: string, email: string, isPaid: boolean){

}

// signUpUser(1,2,3); //defeats the benefit of using typescripy
signUpUser("Samandeep", "Samandeep0792@gmail.com", true);


let loginUser = (name: string, email: string, isPaid: boolean = false) => {}; //providing it a default value
loginUser("Saman", "h@h.com") //isPaid is not provided


export {}