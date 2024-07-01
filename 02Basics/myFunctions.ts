function addTwo(num: number): number{ // function fn_name(parameter: type): return_type { function body }; 
    // num.toUpperCase(); //this is not allowed -> mischeive things not allowed
     return num+2;
    //return "hello" // how can i return a more accurate value??? 
    // Hello buddy?? How are you doing it? 
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

// signUpUser(1,2,3); //defeats the benefit of using typescript
signUpUser("Samandeep", "Samandeep0792@gmail.com", true);


let loginUser = (name: string, email: string, isPaid: boolean = false) => {}; //providing it a default value
loginUser("Saman", "h@h.com") //isPaid is not provided


// function getValue(myVal: number): string{ //here infering the return type as either string or boolean gives an error as there are two different types being returned here: A function with two different retrun types

//     if(myVal > 5) {
//         return true
//     }
//     return "200 OK";
// }


const getHello = (s: string): string => { //If there is nothing inside the function body, the function return inference will raise an error saying: a function whose return type is neither void, undefined, or null, should return a value


    return "" //as soon as write this, the error is gone

}

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((element) : string => `hero is ${element}`); //It automatically knows the element is going to be a type number --> return type is defined, you cannot return 1


function consoleError(errmsg: string): void{ //It's return type is void, means it is not returning anything
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    //console.log("Samandeep Singh") //This is not allowed with never

    throw new Error(errmsg);

}

//Never: The function never returns a value --> values which are never observed

// Throws an exception or terminates the execution of the program



export {}