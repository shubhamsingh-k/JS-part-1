// let originalPrices = [453, 6554,4567]

// let discountedPrices = []
// for (value of originalPrices){
    // discountedPrices.push[value *0.9]
    // let discountPrices = value *10/100
    // discountPrices.push(value - discount)
// }

// console.log(originalPrices);
// console.log(discountedPrices);


// const failedStudents = students.filter((student) =>student.marks <33).map((student)=>student.name)
// console.log(failedStudents);

let marks = [233,322,32,332,222]
// let totalMarks = 0
// marks.forEach((mark) =>totalMarks = totalMarks + mark)
// console.log(totalMarks);

// const totalMarks = marks.reduce((accumulator , currentValue) =>
// {accumulator = accumulator +currentValue
//     return accumulator ;   //bina return ke undefined hoga

// } , 0)

// console.log(totalMarks);

const attendence = ["Present" ,"Present" , "absent" , "Present" , "absent"]

// let obj = {}
// attendence.forEach((value) => {
//         if (obj[value] ) {
//     obj[value] = obj[value] + 1

// } else {
//     obj[value] = 1
// }

// })
// console.log(obj);

const obj = attendence.reduce((acc , value) =>{
//   if (obj[value] ) {
//     obj[value] = obj[value] + 1

// } else {
//     obj[value] = 1
// }
acc[value] =  (acc[value] || 0 ) + 1 ;
return acc
},

    
{} )