abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void //this means that I'm not going to provide you definition

    getReelTime(): number { //I can override it
    //Some complex calculation
    return 8
    } //You can have the definition as well, this is what different than interfaces
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter) //You have to call the parent class constructor inside the derived class in
    }

    getSepia(): void {
        console.log("Sepia")
    }
    //Wait! we were able to do these things in the interface as well, what's the point of having abstract classes then?


}

// const samandeep = new Ins("test", "test") //When you make the class abstract, you cannot create objects from it
const samandeep = new Instagram("test", "test", 1); //this is perfectly fine, you can create the objects of the class extending the abstract class

samandeep.getReelTime();


