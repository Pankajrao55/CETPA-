// JAVASCRIPT ARRAY ASSIGNMENT 


// Question no. 1 : Find the Product.

function Find_Prod(arr) {
    let product = 1; 

    
    for (let num of arr) {
        product *= num; 
    }

    return product; 
}

console.log(Find_Prod([5, 10, 2])); 



//************************************************************************************************************ */


// Question no. 2:  Find the Sum

function Find_Sum(arr) {
    let sum = 0; 

    
    for (let num of arr) {
        sum += num; 
    }

    return sum; 
}

console.log(Find_Sum([5, 10, 2])); 




//************************************************************************************************************************************

// Question no. 3: Count Occurrences


function Count_Occurrences(A, K) {
    let count = 0; 

    
    for (let num of A) {
        if (num === K) {
            count++; 
        }
    }

    return count; 
}

console.log(Count_Occurrences([5, 10, 5, 2, 5], 5)); 
console.log(Count_Occurrences([-1, 0, -1, 1], ) -1);   



//******************************************************************************************************************************** */


// Question no. 4:  Even Odd


function findEvenOdd(A) {
    
    let B = new Array(2).fill(0); 

    
    for (let num of A) {
        if (num % 2 === 0) {
            B[0] += num; 
        } else {
            B[1] += num; 
        }
    }

    return B; 
}

console.log(findEvenOdd([2, 4, 6, 8]));   



//********************************************************************************************************************************* */

// Question no. 5: Find whether the number is present or not


function Find_Num(arr, num) {

    for (let element of arr) {
        if (element === num) {
            return true; 
        }
    }
    return false; 
}
console.log(Find_Num([1, 2, 3, 4, 5], 3)); 



//*********************************************************************************************************************************** */


// Question no. 6: Higher Age

function highAge(A) {

    return A.filter(age => age >= 18);
}
console.log(highAge([18, 12, 14, 23])); 




//******************************************************************************************************************************** */


// Question no.7 : Increment the Array Elements

function Inc_Arr(arr) {
    
    return arr.map(element => element + 1);
}

console.log(Inc_Arr([10, 20, 30])); 



//*********************************************************************************************************************************** */

// Question no.8: Pass or Fail

function isAllPass() {
    const A = [32, 45, 28, 50, 60];


    for (let mark of A) {
        if (mark < 32) {
            return "NO";
        }
    }
    return "YES"; 
}

console.log(isAllPass()); 



//******************************************************************************************************************************* */

// Question no. 9: Unique Color Shirt

function countUniqueShirts(shirts) {
    const colorCount = {}; 

    
    for (let color of shirts) {
        colorCount[color] = (colorCount[color] || 0) + 1;
    }

    
    const uniqueColors = Object.keys(colorCount).filter(color => colorCount[color] === 1);

    return uniqueColors.length;
}
console.log(countUniqueShirts([1, 2, 2, 3, 4, 4, 5]));



// *****************************************************************************************************************************


// Question no. 10: Min and Max

function findMinMax(arr) {

    if (arr.length === 0) {
        return { min: null, max: null }; 
    }

    let min = arr[0]; 
    let max = arr[0]; 

    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    return { min, max }; 
}

console.log(findMinMax([5, 3, 8, 1, 4]));

