//   CLASS   //
// it makes object.

// function product(name , price){
//     console.log(this);
// }

// const random = () => {
//     console.log(this);
// }

// // product();
// random();
// console.log(hi );


// function outter(){
//     const random = () => {
//         console.log(this);
//     }
//     random();
// }

// outter();


// function product(name , price){

//     this.name = name
//     this.price = price
//     // console.log(this);
//     // return "hii";
// }
//   const p1 =new product("Iphone 18 Ultra pro max" , 77777972079);
//   const p2 = new product("Samsung 18 Ultra pro max" , 77777972079);

// console.log(p1);
// console.log(product);
// console.log(p2.name);


//new key word//>>>>1. create a brand new object -> {}
//------------->>>>>2. set 'this' inside the function to point at the new object. 
//----------------->>>>3. function this-> {} isme change kerta hai
//---------------->>>>>4. links the new object to prototype
//---------------->>>>>5. automatically returns new object.

// class User{

//     country = "India"
//     // age = 10  // default property
//       constructor(name , country){
//         // console.log("hello");
//         // this.name="shubham"   /// instance property
//         this.name = name  //instance property
//         this.country = country  // instance property
//       }

//       printName(){     //instance method
//         console.log(this.name);
//       }
// }

// const u1 = new User("shubham" , "India");
// const u2 = new User("vk18" , "India");


// u1.name = "name updated"
// console.log(u1);
// u1.printName()
// u2.printName()



class BankAccount{
    #balance: ///this is private property

    static totalBankAccount = 0;

    constructor(initialBalance){
        this.#balance = initialBalance
        BankAccount.totalBankAccount++;

    }
    get(){  //method
        console.log(this.#balance);
    }

    withdraw(amount){   // method
        if(amount > this.#balance ){
            console.log("insufficient ammount");
            return 
        }
        this.#balance = this.#balance - amount
    }

    deposit(amount){   // method
        if (amount <= 0) {
             console.log("amount is to big to put into bank");
             return
        }
    }
   
   static calculateTax(){  // static method
        console.log("calculating tax...");
    }
}

let acc1 = new BankAccount(500);
let acc2 = new BankAccount(500);
let acc3 = new BankAccount(500);
let acc4 = new BankAccount(500);


acc1.get()
acc1.withdraw()
acc1.get()
acc1.deposit()
acc1.get()
acc1.withdraw()
acc1.get()

acc1.#balance =  3234242425245   // private field '#balance' must be declared in an enclosing class

acc1.get()

acc1.deposit(-123)
acc1.get()

acc1.calculateTax()    // acc1.calculate is not a function
BankAccount.calculateTax
console.log(BankAccount.totalBankAccount);