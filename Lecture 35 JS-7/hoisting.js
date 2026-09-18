// console.log(a);
// var a = 18;
// const a = 36;


// addNum()
// function addNum(){
//     console.log("Heaven");
// }

// how is code executed ?

// CREATION PHASE                       //EXECUTION PHASE
// (DECLARATION PART HAPPEN HERE)       //


// var a = 5;

// let b = 7;
// function addNum(){
//     let a = 6;
//     console.log(a);
// }
// addNum();

// var x = 6;  //ye output 6 dega 
// function random(){
//     console.log(x);
//     // var x = 3  //ye undefined dega 
// }
// random();

// let city ="Patna";
// function printCity(){
//     console.log(city);
// }
// function random(fn){
//     let city = "Varansi"
//     // fn()
//     function printCity(){
//         console.log(city);
//     }
//     return printCity
// }

// let printCity = random();
// // random(printCity);
// printCity();

// function outer(){
//     function inner(){
//     // return 10;
//     }
//     // inner ()
//     return inner
//     // return inner()
// }
// // outer()


// const inner = outer()
// let username = "shubham"
// inner();

function fun1(){
    let userName = "Shubham"
    function fun2(){
        function fun3(){
            function fun4(){
                console.log(userName);
            }
            fun4()
        }
        fun3()
    }
    fun2()
}
fun1()
