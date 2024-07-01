//Interfaces are very identical to types but yes they are different in a way or the other

interface User { //Very superficial version of class --> no implementation
    readonly dbId: number
    email: string;
    userId: number;
    googleId?: string; //It is optional
    startTrial: () => string //return type string
    endTrial(): string //return type
    getCoupon(couponname: string, value: number): number //added parameters --> of type string --> the fn getCoupon should have both the arguments when called --> type of arguments is well defined in the interface    
} // this doesn't have a github login id

interface User {
    githubToken?: string 
} //adding values to existing interface

interface Admin extends User {
    role: "admin" | "ta" | "learner";


} //inheritance is possible with interfaces

// Multiple inheritance is possible in typescript, just add a comma and interface name and boom! you can extend from it as well

const Saman: Admin = {
    role: "admin",
    dbId: 22, 
    email: "samandeep@gmail.com", 
    userId: 132, 
    startTrial: () => "trial started", 
    endTrial: () => "end",
    getCoupon: (name: "Samandeep", off: 23) => 30, //name is just a reference
    githubToken: "211"

};

Saman.email = "s@sam.com";

// Saman.dbId = 2121; //manipulation on readonly fields is not allowed

export {}