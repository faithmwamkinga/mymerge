function divideArray(num){
if (num.length<=1){
    return num
}
let middle = Math.floor(num.length/2);
let left = num.slice(0,middle);
let right = num.slice(middle);
return sortedArray (divideArray(left),divideArray(right))

}
function sortedArray(left,right){
    let emptyArray = [];
    while (left.length && right.length){
        if (left[0]<right[0]){
            emptyArray.push(left.shift());

        }
        else (
            emptyArray.push(right.shift())
        )
    }
    return [...emptyArray,...left,...right]
}

let num = [10,2,56,3,8,4,11];
console.log(divideArray(num));

// my merge sort
function myDividedArray(arrays){
    if(arrays.length<=1){
        return arrays
    }
    let middle = Math.floor(arrays.length/2);
    let left = arrays.slice(0,middle);
    let right = arrays.slice(middle)
    return (mySortedArray(myDividedArray(left),myDividedArray(right)))
  
}
function mySortedArray(left,right){
let newArray = []
while (left.length&&right.length){
    if(left[0]<right[0]){
        newArray.push(left.shift())
    }
    else{
        left[0]=right[0]
        newArray.push(right.push())
    }
}
return [...newArray,...left,...right]
}

let arrays = [90,23,45,55,69,21,78,67]
console.log(myDividedArray(arrays))