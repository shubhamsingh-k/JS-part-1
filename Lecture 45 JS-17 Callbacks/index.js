// function fun1(Callback){
//     console.log("hii")
//     Callback()
// }


// function cb(){
//     console.log("This is call back function");
// }
// fun1(cb)

//practice

// function fun1(shubham){
//     console.log("hello");
//     shubham()
// }

// function cb(){
//     console.log("This is myself.");
// }

// fun1(cb)

// function funMe(VK18){
//     console.log("Virat 18");
//     VK18()
// }

// function cb(){
//     console.log("King of Cricket");

// }

// funMe(cb)



// let arr = ["a","b","c","d"]

// function a(){

//     function b(){

//     }
//     return b
// }


// arr.forEach()
// arr.map()

// function a(){
//     function b(){

//     }
//     return b
// }

// a()

// function searchPizza(cb1){
//     console.log("Pizza searching...");
//     setTimeout (function(){
//         console.log("here is the pizza's Menu");
//         let price = 500;
//         cb1(price)
//     }, 2000)
// }

// function addCart(){
//     console.log("Pizza added to Cart");
//     setTimeout (function(){
//         console.log("Pizza added to cart");
//     }, 3000)
// }
// searchPizza()
// searchPizza(function (price) {
//     console.log(price);
// })





//INVersion of Control--->we give control of something to someone else

    // function searchPizza(){
    //     setTimeout(() => {
    //        console.log("Pizza order ho gya");
    //     }, 2000);
        
    //     console.log("add to cart");
    // }
    // function shubham(cb){
    //     cb();
    // }

    // shubham(searchPizza);

     function searchPizza(a){
        console.log("Pizza searching...");
        setTimeout(function fun1(){
            console.log("Here is the Pizza menu.");
            let price = 500;
            a(price)
        }, 2000)
     }
    
     function addToCart(cb2){
        console.log("Pizza adding to Cart...");
        setTimeout(function fun2(){
            cb2()
        }, 3000)
     }

     function payment(price){
        console.log(`Payment Initiated , Amount : ${price}`);
        setTimeout(function fun3() {
            console.log(`Payment Completed , Amount : ${price}`);
            console.log("Bss Aa hee gaya Pizza");
        }, 5000)
     }

     searchPizza(function a(price){
        addToCart(function b() {
            payment(price)
            payment(price)
        })
     })