// Javascript Assignment 4 // String assignment



// Question no. 1 : Count Characters


function countCharacters() {
    
    let B = [0, 0];
    let S = "ABADB"

    for (let char of S) {
        if (char === 'A') {
            B[0]++;
        } else if (char === 'B') {
            B[1]++;
        }
    }

    return B;
}

console.log(countCharacters());



//************************************************************************************************************************************ */



// Question no. 2 : . Count the Heads


function CountHead() {
    let charCount = {};
    let result = 0;
    let s = "AABBD"

    
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    
    for (let char in charCount) {
        if (charCount[char] > 1) result++;
    }

    return result;
}

   console.log(CountHead());




//************************************************************************************************************************************* */


   // Question no. 3 : Count the Vowels


   function countVowels() { 

    let count = 0;

    let s = "Hello World";
    let vowels = "aeiouAEIOU";

    for (let char of s) {
        if (vowels.includes(char)) {
            count++;
            }
             }
            return count;
             }
            console.log(countVowels());



//******************************************************************************************************************************** */


// Question no. 4 : . Concatenate the Strings

  function Concatenate_Strings(S1,S2) {
    let result = S1 + S2;
    return result;

    }

    console.log(Concatenate_Strings("Hello", "World"));



//******************************************************************************************************************************** */



// Question no. 5: Find Length 


function findLength(s) {
    let count = 0;
    //let s = "Hello World";

   
    for (let char of s) {
        count++;
    }

    return count;
}
  console.log(findLength("Hello World"));




//******************************************************************************************************************************** */



// Question no. 6 : Find the Winner 
  
function Game_Winner(S) {
    let adityaWins = 0; 
    let danishWins = 0; 
                
                    
    for (let char of S) {
           if (char === 'A') {
               adityaWins++;

            } else if (char === 'D') {
               danishWins++;
            }
       }
   
       if (adityaWins > danishWins) {
           return "Aditya";

        } else if (danishWins > adityaWins) {
           return "Danish";

        } else {
           return "Draw";
        }
    }
        console.log(Game_Winner("AAADAD")); 



//********************************************************************************************************************************** */


// Question no. 7 : Join Strings 

        function joinStrings(S, P) {
            
            return S + P;
        }
        console.log(joinStrings("Hello", "world"));



//********************************************************************************************************************************** */



// Question no. 8: Plaindrome Check  

function Plain_Check(S) {
    
    S = S.toLowerCase();
    
  
    let reversed = S.split('').reverse().join('');
    
    
    return S === reversed;
}
    console.log(Plain_Check("naman"));   
    console.log(Plain_Check("Naman"));     
    console.log(Plain_Check("Hello"));    
    
    
//********************************************************************************************************************************* */

// Question no. 9: Reverse the String 


function Reverse_String(S) {
   
    return S.split('').reverse().join('');
}

console.log(Reverse_String("Hello"));     
console.log(Reverse_String("JavaScript"));  


//******************************************************************************************************************************** */


// Question no. 10: Match the Strings

function String_Match(S1, S2) {

    if (S1 === S2) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
String_Match("hello", "hello");
String_Match("hello", "world"); 


//******************************************************************************************************************************** */


// Question no. 11: String Replace

function Replace(S, pattern, text) {
    
    return S.split(pattern).join(text);
}

console.log(Replace("Hello, world!", "world", "JavaScript")); 


//************************************************************************************************************************************************* */


// Question no. 12: Split the String

function Split_the_String(S) {
    
    return S.split(' ');
}

console.log(Split_the_String("Hello World! I am a developer "));





//************************************************************************************************************************************ */


// Question no. 13:  Count the Vowels and Consonants


function Count_Vowels(S) {
    const vowels = "AEIOUaeiou"; 
    let count = 0;

    
    for (let char of S) {
        if (vowels.includes(char)) {
            count++; 
        }
    }

    return count; 

}


function Count_Consonants(S) {
    const vowels = "AEIOUaeiou";
    let count = 0;

    for (let char of S) {

        if (char.match(/[a-zA-Z]/) && !vowels.includes(char)) {
            count++;
        }
    }

    return count; 

}


  const testString = "Hello World!";

 console.log(Count_Vowels(testString));
 console.log(Count_Consonants(testString));



  
 //********************************************************************************************************************* */













