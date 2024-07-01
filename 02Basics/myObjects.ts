const User = {
    name: "Samandeep Singh",
    email: "samandeep0792@gmail.com",
    isActive: true
}

const createUser = ({name: string, isPaid: boolean}) => {}

let newUser = {name: "Samandeep Singh", isPaid: true, email: "samandeep0792@gmail.com"}

// createUser({name: "Saman Sandhu", isPaid: false}); 
createUser(newUser); //this time it doesn't throw an error

// createUser({name: "Samandeep Singh", isPaid: true, email: "samandeep0792@gmaild.com"}) --> this doesn't work

// createUser(User); //this won't work as it doesn't have the required keys 


const createCourse = ():{name: string, isPaid: boolean} => {
    return {name: "Introduction to web programming", isPaid: true}
} //this function returns an object


//Type aliases


//Advantage: we want all the information to be passed 
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

// type Mystring = string; --> this is technically allowed 

function registerUser(user: User): User{return User} //return type could be User as well


// registerUser({}); //argument doesn't match user 
registerUser({name: "Samandeep Singh", email:"samandeep0792@gmail.com", isActive:true}); // this would work fine








export {}