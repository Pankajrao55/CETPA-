
// Assignment 6 ( Objects Questions)
// 30/11/24


//*********************************************************************************************************************************************************************** */

// Question no.1 : Create a Function in object 


function SetterMethod(obj) {
    obj.setter = function() {
        console.log(this.name);
    };
}

const myObject = { name: "Pankaj" };
SetterMethod(myObject);
myObject.setter(); 


//******************************************************************************************************************************************************************** */


// Qestion no..2: Delete a Parameter


function deleteRollNo(obj) {
 
    const isDeleted = delete obj.rollno;

    
    console.log(isDeleted ? "True" : "False");


    return obj;
}


const student = { name: "Pankaj", age: 22, rollno: 1111 };
deleteRollNo(student);


//************************************************************************************************************************************************************************ */


// Question no.3: Check whether the Package is Dream Package or not


function checkSalary(obj) {
    
    if (obj.salary > 600000) {
        return "Dream";
    } else {
        return "NotDream";
    }
}


const person1 = { name: "Pankaj", salary: 700000 };
console.log(checkSalary(person1)); 


//***************************************************************************************************************************************************************** */


// Question no.4:  Check whether the Object has a parameter or not


function ObjectNotEmpty(obj) {
    
    if (Object.keys(obj).length === 0) {
        return false; 
    } else {
        return true; 
    }
}


const emptyObject = {};
console.log(ObjectNotEmpty(emptyObject)); 


//************************************************************************************************************************************************ */


// Question no.5: Merge the Objects 


function mergeObjects(obj1, obj2) {
    
    return { obj1,obj2 };
}


const object1 = { name: "Pankaj", age: 22};
const object2 = { city: "Haryana", occupation:"Developer"};

const mergedObject = mergeObjects(object1,object2);
console.log(mergedObject);


//************************************************************************************************************************************************ */


// Question no.6: Object Multiplyer


function multiplyObject(N, id, houseno) {
    
    const updatedId = id * N;
    const updatedHouseNo = houseno * N;


    return `${updatedId} ${updatedHouseNo}`;
}


const N = 2;
const id = 12;
const houseno = 146;

const result = multiplyObject(N, id, houseno);
console.log(result);


//****************************************************************************************************************************************** */

// Question no.7: Find the sum of Object Members 


function Sum(Obj) {
    
    const sum = Obj.p1 + Obj.p2 + Obj.p3;

    return sum;
}


const myObject2 = { p1: 10, p2: 20, p3: 100 };
const result2 = Sum(myObject2);
console.log(result2); 


//*************************************************************************************************************************************************** */


// Question no.8: Check whether the Objects are same or not.


function ObjectsSame(obj1, obj2) {
    
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false; 
    }

    for (let key in obj1) {
    
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true; 
}


const object3 = { id: 1, name: "Pankaj", age: 22 };
const object4 = { id: 1, name: "Pankaj", age: 22 };


console.log(ObjectsSame(object3, object4)); 







