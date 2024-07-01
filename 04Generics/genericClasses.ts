interface Database {
    connectionString: string;
    username: string;
    password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
       valOne,
       valTwo
    }
}

// anotherFunction(3,"four");
//Argument of type 'string' is not assignable to parameter of type 'number'

// anotherFunction(3, {})

interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable <T>{
    public cart: Array<T> = [];

    addToCart(product: T){
        this.cart.push(product)
    }
}