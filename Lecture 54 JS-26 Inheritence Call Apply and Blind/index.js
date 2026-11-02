// INEHERITENCE//

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        // static sendEmail(){}
 
    }
     login(){console.log("login");}
    logout(){console.log("logout");}
}

class Customer extends User{
    cart = []
    constructor(name, email){
        super(name, email)
        // this.name = name;
        // this.email = email;

    }
    buyProduct(){console.log("buyProduct");}
    addToCart(item){this.cart.push(item)}
    showCartItemes(){console.log(this.cart);}
}


class Seller extends User{
    // constructor(name, email){
    //         //  this.name = name,
    //         //  this.email = email
    // }
    addToProduct(){console.log("addToProduct")}
    // login(){}
    // logout(){}

}


class Admin extends User{
    // constructor(name, email){
    //         //  this.name = name,
    //         //  this.email = email
    // }
    hideProduct(){console.log("hideProduct")}
    // login(){}
    // logout(){}
    
}

const c1 = new Customer("Shubham" ,"shubhamsingh@example.com" )
const c2 = new Customer("Shobha" ,"shobhasingh@example.com" )
const c3 = new Customer("Shobhi" ,"shobhisingh@example.com" )
// console.log(c1);
// console.log(c2);

// console.log(c3);

c1.logout()
c1.addToCart("macbook")
c1.showCartItemes()

//MULTI LEVEL INHERITENCE

class PremiumCustomer extends Customer{
    constructor(name , email , pass){
        super(name, email, pass)   // ye super apne parent customer ke constructor ko call karegaa
    }
    getDiscount(){}

}

const pc1 = new Customer()



// call,apply and blind