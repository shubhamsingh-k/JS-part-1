          //  MAP , FILTER and REDUCE


// let student = {
//     name : "shubham",
//     rollNo : 18,
//     subject : ["math","english", "Hindi" ],
// }
// let {subject : Shubham, ...variable}= student
// console.log(Shubham)

// OBJECT MERGING

// let obj1 = {
//     name : "Shubham",
//     phone : 48042095824985 ,

// }
// let obj2 = {
//     address : "Bharat",
//     adharCard : 34298328924384,
//     name : "Khushi"
// }

// let obj3 = {...obj1 , ...obj2}
// console.log(obj3);


// ARRAY AND OBJECT MERGING

// let arr = [1,2,3,4]
// arr = ["rffr" , "gbgbgg"] //arr value exchange method
// const arr = [1,2,3,4]
// arr[1] = "updated"

// console.log(arr);

// const obj = {
//     name : "Supnekha",
//     rollNo : 32 ,
//     address : null
// }

// obj = {
//     add : "Ravan"
// }
// obj["name"] = "RAvan"
// console.log(obj);

// delete obj.rollNo
// console.log(obj);

// console.log(obj.address?.street);



// SPLICE-->(Start , Delete Count)

let arr1 = [1,2,3,4,5,6,5]
// arr1[2] = undefined
// arr1.splice(1,3)   DELETE
// arr1.splice(3,0,2)  //add
// arr1.splice(3,2,["replace"])  //replace
// console.log (arr1);

// arr1.slice(start?:2 , end? : 3),
// let trimArr = arr1.slice(1,3)

// console.log (arr1);

// console.log(arr1.indexOf(3443345)) //-1 dega element nhi hoga to

let res = arr1.find((value) =>{
  return value === "5"
}
)
console.log(res);

let resIndex = arr1.findIndex((value) =>{
    return value === 5
})

console.log(resIndex)


//FLAT
let arr3 = [1,2,3,4,5,[6,7,8,[9,10,11]]]
// arr3.flat(1)
console.log(arr3.flat(Infinity));

let arr4 = [4,5,89,67,78,987]
let arrCopy = arr4;
let arrCopy2 = [...arr4];
arrCopy.pop()
console.log("arr4" , arr4);
console.log("arr4" ,  )

         //MAP--->METHODS hota hai
