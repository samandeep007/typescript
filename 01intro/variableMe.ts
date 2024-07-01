let greetings: string = "Hello Samandeep Singh"
//General syntax: let variableName: type = value

// greetings = 6; --> Type number is not assignable to the type string --> Type safety

console.log(greetings);

let myNum = 6;
// myNum.toUpperCase(); //method toUpperCase() doesn't exist on the type number

//colan and the type is what you need to remember for now


// number
//let userId: number = 12323; //is a number and should always be a number
// When you're declaring and initializing a variable in the same line, there is not need to specify the type of the variable, typescript is smart enough to do that for you
let userId = 2323.24;


// boolean
let isLoggedIn: boolean = false; //: means infer

//type inference -- already discussed using number example


//When typescript can't infer what type is the variable going to have in the future, it simply infers it to any
let hero: string; //hero: any 

function getHero(){
    return "thor"
}

hero = getHero();


export {}
