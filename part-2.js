// PART 2
// 1. Print 1 to x
function printUpTo(x){
    let bool;
    // if positive integer
    if(x > 0){
        for(let i = 1; i <= x; i++){
            console.log(i);
        }
    }else if(x < 0){ // if negative integer
        bool = false;
    }
    return bool
}
printUpTo(1000); // should print all the integers from 1 to 1000
y = printUpTo(-10); // should return false
console.log(y); // should print false

// 2. PrintSum
function printSum(x){
    var sum = 0;
    for(let i = 0; i <= x; i++){
        console.log(i);
        // add the current value of sum to the current value of i
        sum += i;
    }
    return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640

// 3. PrintSumArray
function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
        sum += x[i]
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6

// 4. Bonus: LargestElement
// Create a function that returns the largest element in a given array.  
// For example largestElement( [1,30,5,7] ) should return 30.
function largestElement(arr){
    let largestNum = 0;

    for(let i in arr){
        // if element if greater than the current value of largestNum
        if(arr[i] > largestNum){
            largestNum =  arr[i];
        }
    }
    return largestNum;
}
console.log(largestElement([1,30,5,7]));