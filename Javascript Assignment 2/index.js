

 // Question no. 1 : Find Grades    --------------------------------------------------------

function Grades(marks) {
    
    switch (Math.floor(marks / 10)) {
        case 0: // ( M ≤ 10 )
            console.log('E');
            break;
        case 1:  // ( 11 ≤ M ≤ 20 )
            console.log('D');
            break;
        case 2: // ( 21 ≤ M ≤ 30 )
            console.log('C');
            break;
        case 3: // ( 31 ≤ M ≤ 40 )
            console.log('B');
            break;
        case 4: // ( 41 ≤ M ≤ 50 )
             console.log('A');
            break;
        default:
            console.log('Invalid marks');
            break;
    }
}

        Grades(23); 
        Grades(20); 
        Grades(40); 



// Question no. 2 : Get Value    ---------------------------------------------------------------------------

function getValue(char) {
    switch (char) {
        case 'P':
        case 'p':
            return 'PrepBytes';
        case 'Z':
        case 'z':
            return 'Zenith';
        case 'E':
        case 'e':
            return 'Expert Coder';
        case 'D':
        case 'd':
            return 'Data Structure';
        default:
            return 'Invalid Input';
    }
}


console.log(getValue('P'));  
console.log(getValue('z'));
console.log(getValue('E'));  
console.log(getValue('d'));  
console.log(getValue('X'));  




// Question no.3 : Find the maximum out of three numbers     ----------------------------------------------------------


function findMax(a, b, c) {
  if (a === b && b === c) {

        console.log(-1);
     }
      else {
         console.log(Math.max(a, b, c));
    }
         }
                
        
    findMax(3, 5, 7); 
    findMax(10, 10, 10);  
    findMax(12, 9, 12);                 



// Question no. 4 : Second Smallest number     ------------------------------------------------------------------------

function findsecondSmallest(X, Y, Z) {

    let arr = [X, Y, Z];
    

    arr.sort(function(a, b)  {
        return a-b;
    });
        

    return arr[1];
}



console.log(findsecondSmallest(20, 5, 10)); 
console.log(findsecondSmallest(30, 1, 20));  
console.log(findsecondSmallest(15, 7, 12)); 




// Question no. 5 : Check whether the triangle is Acute or Obtuse   -----------------------------------------------------------------------

function Triangle(angle1, angle2, angle3) {
    
    if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
        console.log("Acute triangle");
    } else {
        console.log("Obtuse triangle");
    }
}

Triangle(40, 70, 80);
Triangle(30, 40, 35);  
Triangle(70, 20, 100);  

