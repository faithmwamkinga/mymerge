let myarray = [23,true,"Faith",20.3];
let hisarray = [34, false, "Joune", 30.5];
console.log(myarray);
console.log(hisarray);
//.push adds at 
myarray.push("George");
console.log(myarray);
//unshift for adding at the beginning of the array
hisarray.unshift("Samuel");
console.log(hisarray);
//removes first element in an array
myarray.shift();
console.log(myarray);
//.pop removes the last element in an array
myarray.pop();
console.log(myarray);
//concatenating arrays
let otherarray = myarray.concat(hisarray);
console.log(otherarray);

let numarray = [34,56,78,90,11,45];
let multipliedarray = numarray.map(function(a){
    return a*3;
})
console.log(multipliedarray);

//Extract the first four characters from the string below;
//"beautiful
let me = "beautiful";
//slice (0,4) means from 0 to 4 count 4
let we = me.substring(0,4);
console.log(we);
// alternative of slice using substring


//inserting eat at the tenth index
let food = "I did not have appetite today";
let food2 = food.slice(0,10)+ "eat " +food.slice(10);
console.log(food2);


// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."s"
// const story= "She sells sea shells at the sea shore"
let sentence1 = "she sells sea shells at the sea shore";
let times = "the";
let occurance = sentence1.split(times).length-1;
console.log(occurance);


