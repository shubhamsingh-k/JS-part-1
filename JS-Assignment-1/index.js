//                      JS ASSIGNMENT-1


// Q1.

// let a = 18;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// Q2

// let a = 10;
// let b = 20;
// if (a==10){
// console.log(b);
// }

// else console.log(a);


// Q3.

// Method-1

// let Mathematics = 97;
// let Science  = 98;
// let English  = 99;

// let totalMarks = Mathematics + Science +English ;
// let average = totalMarks/3;
// let percentage = (totalMarks/300)*100 ;
// console.log("Total marks: ", totalMarks );
// console.log("Average: ", average );
// console.log("Percentage: ", percentage);

// METHOD-2

// function subjects(Maths , English, Physics){

//     let totalMarks = Maths+English+Physics;
//     let average = totalMarks/3;
//     let percentage = average;
//     console.log("totalMarks: " ,totalMarks );
//      console.log("average: " ,average );
//       console.log("percentage: " ,percentage + "%");
// }
// subjects(80,90,100);


// Q4.

// let sareePrice = 344;
// let quantity = 18;
// let totalBill = sareePrice * quantity;
// let finalBill = totalBill-totalBill*0.1;
// console.log(totalBill);
// console.log(finalBill);

// Q5.

// const length =19;
// const breadth = 20;
// const area = length*breadth;
// const perimeter  = 2*length + 2*breadth;
// console.log(area);
// console.log(perimeter);

// Q6.

// let n = 550;
// if(n%2==0) console.log("even no.");
//     else console.log("odd no." );

// Q7.


// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a number: ", (input) => {

//     let n = Number(input);

//     if (n > 0) {
//         console.log("Positive");
//     }
//     else if (n < 0) {
//         console.log("Negative");
//     }
//     else {
//         console.log("Zero");
//     }

//     rl.close();
// });


  

// Q8.

// let a = 23;
// let b = 34;
// if (a>b) {
//   console.log("first number is greater");
// }
//    else if (a<b) {
//      console.log("second number is greater");
//    }
//   else  {
//      console.log("Both numbers are equal");
//   }

// Method-2

// let a = Number(prompt("1st number"));
// let b = Number(prompt("2nd number"));

// if (a>b) {
//   console.log("first number is greater");
// }
//    else if (a<b) {
//      console.log("second number is greater");
//    }
//   else  {
//      console.log("Both numbers are equal");
//   }


// Q9.

// let a = 20;
// let b = 34;
// let c = 89;
// if (a>b && a>c){
//     console.log(a);
// }
// else if (a<b && b>c) {
//     console.log(b);
// }
// else if (a<c && b<c) {
//     console.log(c);
// }
// else {
//     console.log("condition not verified");
// }

//  Q10.

// let age = 56;
// if (age >=18) {
//     console.log("Eligible to vote");
// }
// if (age <=18) {
//     console.log("Not Eligible to vote");
// }

//   Q11.

// let personAge = 45;
// if (personAge>=18 && "have valid license"){
//     console.log("Person can drive")
// }
// else{
//     console.log("Person cannot drive");
// }

//   Q12.

// let a = 9;
// if (a>10 && a<100){
//     console.log("Number is between 10 and 100")
// }
// else {
//     console.log("not");
// }

//  Q13.

//  Method-1

// let a = 95.5;
// if (a>90 && a<100){
//     console.log("Grade: A ");
// }
// if (a>80 && a<89){
//     console.log("Grade: B ");
// }
// if (a>70 && a<79){
//     console.log("Grade: C ");
// }
// if (a>60 && a<69){
//     console.log("Grade: D ");
// }
// if (a>40 && a<59){
//     console.log("Grade: E ");
// }
// if ( a<40){
//     console.log("Grade: F ");
// }

// // else {}

//  Method-2

// let a = 79;
// if (a>90 && a<100){
//     console.log("Grade: A ");
// }
//  else if (a>80 && a<89){
//     console.log("Grade: B ");
// }
// else if (a>70 && a<79){
//     console.log("Grade: C ");
// }
// else if (a>60 && a<69){
//     console.log("Grade: D ");
// }
//  else if (a>40 && a<59){
//     console.log("Grade: E ");
// }
//  else if (a>0 && a<40){
//     console.log("Grade: F ");
// }

// else {
//     console.log("You are not ready for any type of exams")
// }

//   Q14.
