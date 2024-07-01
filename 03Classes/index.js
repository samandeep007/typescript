var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
        this.city; //I can use it here 
    }
    return User;
}());
var saman = new User("Samandeep0792@gmail.com", "Samandeep Singh");
// saman.city = 121; //I can access it but i can't change it --> Now, i can't even access because it has a private access modifier
//Another way of declaring a class
var Student = /** @class */ (function () {
    function Student(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Sitarganj";
    }
    ; //No need to have that this dot thing anymore
    return Student;
}());
