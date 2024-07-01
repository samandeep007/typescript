const score: Array<number> = [] //Sometimes we want to have a function/class that can accept any datatype and return the same --> this is where Generics helps us

const names:Array<string> = []; //Already existed in the language

function identityOne(val: boolean | number): boolean | number {
    return val;
}
//While it can accept a boolean or a number, it can also return a boolean or a number, there is no certainity that the function takes in a number and returns a number


function identityTwo(val: any): any {
    return val;
}
//Problem remains the same as before

//Lets do it with Generics
function identityThree<Type>(val: Type): Type {
    return val;
}
//Generics make sure that the value of the same type is returned <Type> locks the type of the val

identityThree("3"); //function identityThree<"3">(val: "3"): "3"

function identityFour<T>(val: T): T {
    return val
} // T is same as Type


interface Bottle {
    brand: string;
    type: number;

}

// identityFour<Bottle>({});
//  Type '{}' is missing the following properties from type 'Bottle': brand, type

//Arrays with Generics
function getSearchProducts<T>(products: T[]): T{
    // return products[3]; //Argument can be a array but the return value can be a single val of the same data type

    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
}

const getSearchProductsTwo = <T,>(products: Array<T>): T => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
} //That comma is just distinguish it from HTML tags


