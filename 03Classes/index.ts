class User{
    public email: string; //Everything that you don't mark is public 

    private name: string; //private is available in js as well, you can write the same as #name is javascript and it will have a private access

    readonly city: string = "Jaipur"
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
        this.city //I can use it here 
    }
}

const saman = new User("Samandeep0792@gmail.com", "Samandeep Singh");

// saman.city = 121; //I can access it but i can't change it --> Now, i can't even access because it has a private access modifier

//Another way of declaring a class

class Student {
    private _courseCount = 1; //cannot access outside of the class
    readonly city: string = "Sitarganj"

    constructor(public email: string, public name: string, private userId: string){}; //No need to have that this dot thing anymore

    get getAppleEmail(): string { //this is now a getter, just annotate the function with a get keyword
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum: number) { //typescript setter when annotated with set keyword doesn't allow you to specify a return type --> I say it again -> DON'T SPECIFY IT!! --> it should have a parameter nevertheless
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum;
    }

    private deleteToken() {
        console.log("Token delete")
    }
} 

const Sam = new Student("samandeep0792@gmail.com", "Samandeep Singh", "223");

// Sam.deleteToken(); --> deleteToken is not accessible





export {}
