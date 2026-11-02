//CALL , APPLY  and   BLIND //

let user1 = {
    name : "Virat",
    age : 37,
    // printName(){
    //     console.log(`Hii , I am ${this.name}`);

    // }
}


let user2 = {
    name : "Vikash",
    age : 47,
    // printName(){
    //     console.log(`Hii , I am ${this.name}`);

    // }
}
let user3 = {
    name : "khushi",
    age : 87,
    // printName(){
    //     console.log(`Hii , I am ${this.name}`);

    // }
}


function printName(country){
    console.log((this));
    console.log(`Hii, I am ${this.name} , from ${country}`);
    
}

// printName.call(user1 , "India")
// printName.call(user2 , "Australia")
// printName.call(user3 , "Afganistan")

// user1.printName()
// // user2.printName()
// user1.printName.call(user2)
// user1.printName.call(user3)


//Apply//

// printName.apply(user2 , ["Australia"])
// printName.apply(user3 , ["Afganistan"])
// printName.call(user1 , ["India"])


//BIND//
//-----> new function return kerta hai
const newFun = printName.bind(user1, "India", "Delhi")
console.log(newFun);

newFun()

