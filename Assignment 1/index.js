// Question no. 1 : Add two Numbers 

let A = 5;
let B = 10;

function AddTwoNumbers(A, B) {
    return A + B;
}

console.log(AddTwoNumbers(A, B)); 

// question 2 : Find if the conditions are obeyed or not? 

let c = 5;
let d = 3;

function Is_Valid(c, d) {
    
    return (c < 10 && c > d);
}
console.log(Is_Valid(c, d)); 




// question 3 : Check the conditions 

let e = 20;
let f = 30;

function CheckDivisibility(e, f) {
    
    if (e % 10 === 0 && f % 10 === 0) {
        console.log(true);
    }
    
    else if (e % 10 !== 0 && f % 10 !== 0) {
        console.log(false);
    }

    else {
        console.log(true);
    }
}

CheckDivisibility();


// Question 4 : .Find the first digit of a 4 digit number

let N = 4567;

function First_Digit(N) {
    
    let firstDigit = Math.floor(N / 1000);
    
    
    console.log(firstDigit);
}


First_Digit(N); 


// Question 5 : Find the last digit of a 4 digit number

let G = 4567;

function Last_Digit() {

    let lastDigit = G % 10;
    
    
    console.log(lastDigit);
}


Last_Digit(); 


// Question 6 : .Find the remainder

let a = 3;
let b = 10;

function Find_the_remainder(a, b) {
    
    let remainder = b % a;
    
    
    console.log(remainder);
}


Find_the_remainder(a, b); 


// Question 7: Multiply two Numbers

let j = 5;
let k = 10;

function Multiply_two_number(j, k) {
    let product = j * k;
    
    console.log(product);
}


Multiply_two_number(j, k); 



// Question 8:  Marks Calculator


let m = 85;
let n = 90;
let o = 80;

function Sum(m, n, o) {
    
    return m + n + o;
}

function Average(m, n, o) {

    return Sum(m, n, o) / 3;
}

console.log("Total Marks:", Sum(m, n, o));       
console.log("Average Marks:", Average(m, n, o));  














