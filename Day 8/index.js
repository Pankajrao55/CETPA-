//question No.1 Given a string , find out the number of vowels;

let S = "your name"
let count = 0;
for (let i = 0; i < S.length; i++)
    {
        if (S[i] == 'a' || S[i] == 'e' || S[i] =='i' || S[i] == 'o' || S[i] == 'u' )
            {
                count++;
                }
                }
                console.log(count);





// Second Method for string ( Combination of small and capital letters) 

                let str = "YoUr NamE is PAnkaj";
                let count2 = 0;
                let vowels = "aeiouAEIOU";
                for (let i = 0; i < str.length; i++)
                    {
                        for (let j = 0; j< vowels.length; j++) {

                            if (str[i] === vowels[j]){
                                count2++;
                            }

                        }
                        
                    }
                    console.log(count2);



// Question no. 2: 

// given an array , find out total no.of odd and even no.

 let arr = [1, 5, 6, 3, 8, 9, 7, 2];
 let even = 0, odd = 0;
 for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 == 0) {
        even++;
        }
        else { 
            odd++;
            }
            console.log("even no. are " + even);
            console.log("odd no. odd " + odd);
 


// Question no. 3 : given an array , find the number of 0's and 1's

let arr2 = [0,1,0,0,0,1,0,1,0,1,1,0];
let count0 = 0, count1 = 0;
for (let i = 0; i < arr2.length; i++) 
    if (arr2[i] === 0) {
        count0++;
        }
        else {
            count1++;
        }
        console.log("no. of 0's are " + count0);
        console.log("no.of 1's are " + count1);
