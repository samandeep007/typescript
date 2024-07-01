function detectType(val: number | string ){
    if(typeof val === "string") return val.toLowerCase();
    return val + 3; //When it is 100% number
}

function provideId(id: string | null){
    if(!id) { //checking for null
        console.log("Please provide id"); 
        return;
    }

    return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
    if (strs) { //not null
      if (typeof strs === "object") { //if it is an array
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

  //anything that can be defined using new keyword --> instanceof --> classes basically
  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString()); //x is definitely going to be a date
                 
    } else {
      console.log(x.toUpperCase());
                 
    }
  }


  type Fish = {
    swim: () => void;
  }

  type Bird = {
    fly: () => void;
  }

  function isFish(pet: Fish | Bird): pet is Fish{ //This means you're typecasting it as a fish
    return (pet as Fish).swim !== undefined //pet is a fish if it has a method swim that is not undefined
  }

  function getFood(pet: Fish | Bird) {
    if(isFish(pet)){ //returns a boolean
        pet //Still confused between fish and a bird
        return "fish food"
    }
    else {
        pet
        return "bird food"
    }
  }
  /*
  Step-by-Step Explanation
Function Declaration

function isFish: This means we are creating a special helper that will help us figure out if our toy is a fish.
Function Parameters

pet: Fish | Bird: This means our helper can take any toy that is either a fish toy or a bird toy.
Return Type

pet is Fish: This is like saying, "I will tell you 'Yes, it's a fish!' if I find out that the toy can swim."
Typecasting

pet as Fish: This is like putting on special glasses that make us look at our toy as if it's a fish, even if we're not sure yet.
Checking the Swim Property

(pet as Fish).swim !== undefined: This means we check if our toy can swim. If the toy can swim, it must be a fish, because birds can't swim.
Return Statement

return (pet as Fish).swim !== undefined;: If our toy can swim, we say "Yes, it's a fish!" Otherwise, we say nothing because it's not a fish.
Putting It All Together
Imagine you have a toy box with fish toys and bird toys. You pull out a toy and want to know if it's a fish. You look to see if it can swim:

If it can swim, you know it's a fish toy.
If it can't swim, then it's not a fish toy.
This helper (isFish) does exactly that for us with code!

Summary
isFish: A special helper to check if a toy is a fish.
pet: The toy we are checking (can be a fish or a bird).
as Fish: Looking at the toy as if it's a fish.
swim !== undefined: Checking if the toy can swim (only fish can swim).
return: Saying "Yes, it's a fish!" if the toy can swim.
   */