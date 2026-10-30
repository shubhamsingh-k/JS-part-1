// // ProtoType===>javascript is Prototype based language


// // prototype is an object from which other bjects inherit properties & 


// let user = {
//     name : "shubham",
//     age : "10"
// }



// // console.log(user);

// Object.prototype.allInOne = function(){
//     console.log("kyu kya hui");
// }

// Array.prototype.printItems = function (){
//     for(let i =0; i<this.length ; i++){
//         console.log(this[i]);
//     }
// }

// let arr = [1,2,3]
// // console.log(arr.__proto__);    Dunder proto  ----> double underscore proto
// // console.log(arr.__proto__.__proto__===user.__proto__);
// console.log(arr.__proto__);
// arr.printItems(arr)

// let colors = ["red" ,  "orange", "green"]
// arr.printItems()
// colors.printItems()


// String.prototype.firstTwoCharacters = function(){
//     // console.log("hello kya haal chal");
//     console.log(this[0] + this[1]);
//     return this[0] + this[1]
//     return this.firstTwoCharacters
// }

// "shubham".firstTwoCharacters()
// "87767865297486".firstTwoCharacters()
// user.allInOne()


// function random(){

// }
// random.allInOne()

// Number(1).allInOne()


//SHADOWING


// let user = {
//     name : "shubham",
//     toString(){
//         console.log("ye apna method hai");
//     }
// }

// // console.log(user);
// console.log(user.toString());

let living = {
    eat(){
        console.log("Eat");
        
    }
}

let person = Object.create(living)

person.walk = function(){
    console.log("walk");
}

    let student = Object.create(person)
    student.study = function(){
        console.log("study");
    }

    console.log(person);
    console.log(student);

    // student.eat()

    console.log(student.hasOwnProperty("study"));
    console.log(student.hasOwnProperty("Eat"));

    // let obj =  Object.create({})
    console.log(Object.getPrototypeOf(student));
    console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)));

    console.log(Object.setPrototypeOf());

// class User {
//     country = "india"
//     constructor(name, country2){
//         this.name = name
//         this.country = country2
//     }

//     printName(){
//         console.log(this.name);
//     }
// }

// const u1 = new User("shubham" , "India")
// const u2 = new User ("Vk18", "India")

// console.log(u1);
// console.log(u2);

// // u1.printName()
// // u2.printName()

// console.log(u1.printName() === u2.printName());

// console.log(u1 instanceof User);



// class BankAccount{
//     #balance: ///this is private property

//     static totalBankAccount = 0;

//     constructor(initialBalance){
//         this.#balance = initialBalance
//         BankAccount.totalBankAccount++;

//     }
//     get(){  //method
//         console.log(this.#balance);
//     }

//     withdraw(amount){   // method
//         if(amount > this.#balance ){
//             console.log("insufficient ammount");
//             return 
//         }
//         this.#balance = this.#balance - amount
//     }

//     deposit(amount){   // method
//         if (amount <= 0) {
//              console.log("amount is to big to put into bank");
//              return
//         }
//     }
   
//    static calculateTax(){  // static method
//         console.log("calculating tax...");
//     }
// }

// let acc1 = new BankAccount(500);
// let acc2 = new BankAccount(500);
// let acc3 = new BankAccount(500);
// let acc4 = new BankAccount(500);


// acc1.get()
// acc1.withdraw()
// acc1.get()
// acc1.deposit()
// acc1.get()
// acc1.withdraw()
// acc1.get()

// acc1.#balance =  3234242425245   // private field '#balance' must be declared in an enclosing class

// acc1.get()

// acc1.deposit(-123)
// acc1.get()

// // acc1.calculateTax()    // acc1.calculate is not a function
// // BankAccount.calculateTax
// // console.log(BankAccount.totalBankAccount);

// console.log(acc1 instanceof User);    //kise se bane ho
// console.log(acc1 instanceof BankAccount);
// console.log(new Number(1) instanceof Object);