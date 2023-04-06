let num = [24,true,"hello",38];
let num2 = new Array(24,true,"hello",38);
console.log(num);
console.log(num2);
//push adds element at te end of the array
num.push("fruits");
console.log(num);
//adds at the start
num.unshift(3);
console.log(num);
//removes last elememt from an array
num.pop();
console.log(num);
//removes first element from an array
num.shift();
console.log(num);
//given an array of numbers x, return an array called even where every item in x is multiplied by 5.
//declare array x, loop, multiply
//add at the centre
num[3]=8;
console.log(num);

//given an array of numbers x return an array even , then in x is multiplying by 5
//map
let x = [5,8,2,87,38,67];
let even = x.map(function(item){
    return item*5

})
console.log(even);

//for each
 //let result = x.forEach(function(item){
  //  return item*5
 //} )
 //console.log(result);

 let result= [];
 x.forEach(function(item){
    result.push(item*5)

 })
 console.log(result);

 let newArray = num.concat(x);
 console.log(newArray);

 let tests = ["Angela",...x];
 console.log(tests);

 //dismantling an array
 let [a,b,...c] = x;
 console.log({a});
 console.log({b});
 console.log({c});
 //destructuring and object
