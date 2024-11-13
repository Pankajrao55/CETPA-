//  13/11/24 
// functions


// functions with parameters

function add(num1 , num2){
    let res = num1+num2;
    return res;

}

const res1 = add(2,3);
console.log(res1);



// multiply

function multiply(num3 , num4){
    let res2 = num3*num4;
    return res2;
}
const res2 = multiply(5,6);
console.log(res2);



// 

let arr = [4,5,8,7,9];

let map1 = new Map();

map1.set("name" , "ravi");

map1.set('age',30)
map1.set(1,"one")
map1.set("phone", 1234567)

console.log(map1);  

console.log(map1.get(1));
console.log(map1.has("email"));// return true and false

console.log(map1.delete(1)) // return true and false


// sets

let set1 = new Set();
set1.add("apple");
set1.add("banana");
set1.add("mango");
console.log(set1);

console.log(set1.values());
console.log(set1.has("kiwi"));
console.log(set1.delete("apple"));
console.log(set1);
console.log(set1.entries());

