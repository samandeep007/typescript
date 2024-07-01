type User =  {
    readonly _id: string; //user should not be able to manipulate it --> MongoDB example --> readonly --> Name says it all
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: cardDetails //Not all the users have credit card --> Question mark makes it optional --> it's okay to not have one
}


let myUser: User = {
    _id: "12345",
    name: "Samandeep Singh",
    email: "s@s.com",
    isActive: false
}

myUser.email = "s@gmail.com";

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type CVV = {
    cardCVV: number
}

type cardDetails = cardNumber & cardDate & CVV // & means add here --> it means cardDetails needs to have a cardNumber, cardDate, and CVV --> new type using a combination of other types


// myUser._id = "3232"; //Marked as readonly --> you cannot reassign it

