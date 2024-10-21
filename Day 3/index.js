// console.log("hello world");

// 10/10/24  

 // increment and decrement operators

 // postfix increment = a++

//  let num = 20;
//  console.log(num++, num);


// let num = 20;
// console.log(++num);



// pre decrement 

// let a = 25;
// console.log(a--);


// post decrement 

// let b = 25;
// console.log(--b);



// logical operator 
// && , || , !

// let a = 3;
// let b = 2;
// let c = 1;
// let d = 2
// let res = a>b && c<b;
// console.log(res);


// ||

// let e = 3;
// let f = 2;
// let g = 5;
// let h = 2;
// let ans = e>f || g<h;
// console.log(ans);


// ! 

// let e = 3;
// let f = 2;
// let g = 5;
// let h = 2;
// let ans = e>f || g<h;
// console.log(!true);


// conditional operator or ternary operators

// let a = 5;
// let b = 10;
// let res = ( a > b ? "true value": " false value")
// console.log(res);


// addition of two numbers

// let a = 2
// let b = 5
// let res = a+b;
// console.log(res);

// problem 2 

// let a = 4567;
// let res = a/1000;
// console.log(Math.floor(res));



// conditional statement (if else)

// let x = 5;
// if(x > 10)
//     {
//     console.log("x is greater than 10");
// }
// else{
//     console.log("x is less than 10");
// }


// Switch and break

// var dayname = 5

// switch(dayname){

//   case 0:
//     console.log("Sunday");
//     break;

//     case 1:
//       console.log("Monday");
//       break;

//       case 2:
//         console.log("Tuesday");
//         break;

//         case 3:
//           console.log("Wednesday");
//           break;

//           case 4:
//             console.log("Thursday");
//             break;

//             case 5:
//               console.log("Friday");
//               break;

//               case 6:
//                 console.log("Saturday");
//                 break;

//                 default:
//                   console.log("Invalid day");
//                   break;

// }






// homework 


// using prompt print grades

// const prompt = require('prompt-sync')();

// function askMarks() {
//     while (true) {
//         let input = prompt('Enter marks out of 50: ');
//         let marks = input;

//         switch (true) {
//             case (marks <= 10):
//                 console.log('Grade: E');
//                 break;
//             case (marks >= 11 && marks <= 20):
//                 console.log('Grade: D');
//                 break;
//             case (marks >= 21 && marks <= 30):
//                 console.log('Grade: C');
//                 break;
//             case (marks >= 31 && marks <= 40):
//                 console.log('Grade: B');
//                 break;
//             case (marks >= 41 && marks <= 50):
//                 console.log('Grade: A');
//                 break;
//             default:
//                 console.log('Invalid input. Marks should be between 0 and 50.');
//         }
//     }
// }

// askMarks();






// Weekdays program 


//Prompt the user to enter a number between 1 and 7

// const prompt = require('prompt-sync')();

// while(true){
// let dayNumber = parseInt(prompt("Enter a number between 1 and 7:"));

// switch (dayNumber) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid input! Please enter a number between 1 and 7.");
// }
// }

