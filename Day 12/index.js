// 12/11/24

// find odd and even from given array and sum of total odd no. and sum of total even no.using functon

//let arr = [1,2,3,4,5,6,7]

let sumOdd = 0
let sumEven = 0
let odd = []
let even = []
function findOddEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i])
            sumEven += arr[i]
            } else {
                odd.push(arr[i])
                sumOdd += arr[i]
                }
                }
                
                    console.log("Odd numbers are: ", odd)
                    console.log("Even numbers are: ", even)
                    console.log("Sum of odd numbers: ", sumOdd)
                    console.log("Sum of even numbers: ", sumEven)
                    }
                
                
                    findOddEven([1,2,3,4,5,6,7])



                    





