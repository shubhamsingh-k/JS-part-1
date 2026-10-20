// let hum = document.querySelector("#hii")
// // console.log(hum);
// hum.addEventListener("text" , function(){
//     console.log("heaven");
// })

//sync


// console.log("Task 1");

// console.log("Task 2");

// for(let i = 0; i<1000000000; i++){

// }

// let starTime = Date.now()
// while(Date.now() - starTime < 10000){

// }
// console.log("Task 3");
// console.log(globalThis);
// console.log(document);

//DOM is related to frontend not backend


// WEB API's
//Set timeOut

// console.log("task 1");

// setTimeout(function cb(){
//     console.log("shubham");
// }, 2000)

// // setTimeout(function cb(){
// //     console.log("task 2");
// // } , 0)

// console.log("task 3");




// console.log("task 1");

// setTimeout (function cb() {
//     console.log("task 2");

// } , 5000)

// setTimeout(() => {
//     console.log("task 2");
// },4000)

// let starTime = Date.now()

// while(Date.now() - starTime < 3000){

// }



// setTimeout(() => {
//     console.log("hello 5");

// }, 1000)
// setTimeout(() => {
//     console.log("hello 4");

// }, 1000)


    //  console.log("hello 3");


// // setTimeout(() => {
//     console.log("hello4");

// // }, 3000)


// setInterval (callback , )
// setInterval(function(){
//     console.log("hii");
// }, 1000)





// console.log("a");

// let count = 1;

// let id = setInterval(function() {
//     count++;
//     if(count > 5){
//         clearInterval(id)
//     }
//     console.log("hii");
// }, 0)


//practice

// let count2 = 0;
// let id2 =  setInterval(function(){
//     count2++;
//     if (count2 > 6){
//         clearInterval(id2)

//     }
//     console.log("hello!");
// },1000)

// clearInterval(id)
// console.log("b");

const body = document.querySelector("body")

let colorStr = "0987654321abcdef";

// body.style.backgroundColor = "#45f34se"

setInterval(() => {
    let color = ""
    for (let i=0; i<6; i++){
        let randomValue = Math.floor(Math.random() * colorStr.length)
        color = color + colorStr[randomValue]

    }
    body.style.backgroundColor = `#${color}`
}, 500)