// // //strongly typed syntax
// // let a : string = "Pakistan";
// // a = "USA";
// // let b : number = 9;
// // let c : boolean = true;
// // //type inference
// // let e = "USA";
// // let f = 10.9;
// // f = 22;
// // let g = false;
// // g = true;
// // console.log(g);
// // let age = 18;
// // let status1 = (age >= 18) ? "Adult" : "Minor";
// // console.log(status1);
// // function sum(...numbers: number[]): number {
// //     return numbers.reduce((a, b) => a + b, 0);
// // }
// // console.log(sum(1, 2, 3, 4, 5, 6));
// // const multiply = (a: number, b: number) => a * b;
// // console.log(multiply(2, 3));
// function processuserinput(callback:(input:string)=>void){
//     let input ="Enter your name";
//     callback(input);
// }
// processuserinput((input)=>console.log(input));
// const multiply =(a:number,b:number)=> a*b;
// console.log(multiply(2,3));
// function greet(name: string = "Guest") {
//     console.log("Hello, " + name);
// }
// greet();
// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter());
// let arr = [ 2, 3];
// arr.unshift(1); // returns 1, arr becomes [2, 3]
// console.log(arr);
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0, 4); // [2, 3, 4]
// console.log(newArr);
// for(let i =0; i < 5;i++){
//     console.log(i);
// }
// let i=0;
// while(i < 5){
//     console.log(i);
//     i++;
// }
var a = 2;
do {
    console.log(a);
    a++;
} while (a < 4);
