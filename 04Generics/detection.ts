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