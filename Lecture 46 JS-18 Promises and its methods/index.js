// console.log("hello");

// function greet(){
//     console.log("hello");
// }
// function fun1(cb){
//     cb();
// }
// fun1(greet);


//////////////////////////
//                      //
//   PROMISES PART-1    //

const myPromise = new Promise((resolve , reject) => {
    let success = true;
    if (success){
        resolve("Task completed")
    }
    else {
        reject("Task rejected")
    }
});

console.log("c");
console.log(typeof p);

// const p = new Promise(function(resolve, reject){
//     resolve ("hii");
//     reject("server down hai")
// })


// console.log(typeof p); //object
// console.log(p);
// p.then(function onfulfilled(val){
//     console.log(val);
// }, function onRejected(val){
//     console.log(val);
// }
// )

const res = p.then(function(){
    
})