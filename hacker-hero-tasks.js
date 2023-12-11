// HACKER HERO TASKS
// clean code
// Example 1
function sumAll(a, b){
    var c = a + b;
    return c;
}
// Example 2
function abc(a, b, c, d, e){
    var x = a + b;
    var y = c + 2;
    var z = d - e;
    return x - y + z;
}
abc(3, 5, 10, 3, 7);
// Example 3
function abc(a, b, c, d, e){
    for(var i = 0; i < a; i++){
        b += i;
    }
    return b + d; 
}
abc(1, 2, 3, 4, 5)
// Example 4
function compare(a, b){
    if(a < b){
        return b;
    }else{
        return a;
    } 
}
compare(2, 3);

// Algorithm III Part 2
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
// console.log( printSumArray([1,2,3]) ); // should log 6

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
// console.log(largestElement([1,30,5,7]));

// Algorithm V
//1. Given an array and a value Y, count and print the number of array values greater than Y.
function findGreaterThan(arr, y){
    let count = 0;
    for(let i in arr){
        if(y < arr[i]){
            // print the value
            console.log(arr[i]);
            // count
            count++;
        }
    }
    return count;
}
// console.log(findGreaterThan([9, 6, 3, 4, 5], 3));

// 2. Given an array, print the max, min, and average values for that array.
function maxMinAve(arr){
    let max = 0;
    let min = arr[0]; // initializing with the value of first element
    let average;
    // find max
    for(let i in arr){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    // find min
    for(let j in arr){
        if(arr[j] < min){
            min = arr[j];
        }
    }
    // find average
    let sum = 0;
    for(let k in arr){
       sum += arr[k];
    }
    average = sum / arr.length;
    return "max:"+max+", min:"+min+", average: "+average;

}
// console.log(maxMinAve([2, 4, 1, 8, 10])); // max:10, min:1, average: 5

// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.
// For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function replaceNegative(arr){
    let newArr= [...arr];
    for(let i in newArr){
        if(newArr[i] < 0){
            newArr[i] = 'Dojo';
        }
    }

    return newArr;
}
// console.log(replaceNegative([-3, -6, 8, -1, 9])); // [ 'Dojo', 'Dojo', 8, 'Dojo', 9 ]

// 4. Given an array, and indices start and end, remove values in that index range, working in place (hence shortening the array).
// For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeVals(arr, start, end){
    let newArr = [];
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        // if i is less than or greater than given numbers
        // then add the current element to the new array
        if(i < start || i > end){
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
}
// console.log(removeVals([20,30,40,50,60,70],2,4)); // [20,30,70]

// Algorithm VI
// 1. Return the given array, after setting any negative values to zero.
// For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
function negativeToZero(arr){
    for(let i in arr){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    return arr;
}
// console.log(negativeToZero([1, 2, -1, -3])); // [ 1, 2, 0, 0 ]

// 2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.
// For example moveForward( [1,2,3]) should return [2,3,0].
function moveForward(arr){
    let newArr = [];
    let j = 1;
    for(let i = 0; i < arr.length - 1; i++){
        newArr[i] = arr[j];
        j++;
    }
    // spread operator to get elements
    newArr = [...newArr, 0];


    return newArr;
}
// console.log(moveForward([1,2,3])) // [ 2, 3, 0 ]

// 3. Given an array, return an array with values in a reversed order.
// For example, returnReversed([1,2,3]) should return [3,2,1].

function returnReversed(arr){
    console.log(arr.length)
    let newArr = [];
    let len = arr.length - 1;
    for(let i = 0; len >= 0; i++){
        newArr[i] = arr[len];
        len -= 1;
    }

    return newArr;
}
// console.log(returnReversed([1,2,3])); // [ 3, 2, 1 ]

// 4. Create a function that changes a given array to list each original element twice, retaining the original order.
// Have the function return the new array.
// For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
function repeatTwice(arr){
    let newArr = [];
    let j = 0;
    for(let i = 0; i < arr.length * 2; i++){
        // add first copy
        newArr[i] = arr[j];
        // increment by 1 the value of i
        i += 1;
        // add the second copy
        newArr[i] = arr[j];
        j++;
    }
    return newArr;
}
// console.log(repeatTwice( [4,'Ulysses', 42, false] )); //[ 4, 4, 'Ulysses', 'Ulysses', 42, 42, false, false ]