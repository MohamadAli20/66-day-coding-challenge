// DAY 1
// the more advanced than the previous one using indexOf, another function
// return new array consists of element/s that appear only once combined the two arrays
function diffArray(arr1, arr2) {
    // defined new array
    const newArr = [];
    // function that takes two arguments to get the array with longer length
    function longerFirst(first, second){
        // use indexOf to check if element from first array appears also in second array
        for(let i = 0; i < first.length; i++){
            // indexOf returns index of element if found and -1 if not
            if(second.indexOf(first[i]) == -1){
                newArr.push(first[i]);
            }
        }
    }
    // to avoid [] or empty array
    // alternate the position of two array to check the longer one
    // the longer array should come first to avoid empty array result
    longerFirst(arr1, arr2);
    longerFirst(arr2, arr1);

    return newArr;
};
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [ 4 ]

// Seek and Destroy
// solve using  indexOf()
// array.indexOf(element) returns index of the element if found and -1 if not
function destroyer1(...arr) {
    // create new array
    const newArr = [];
    // separate ...arr into two arrays
    const arrList = arr[0]; // [ 1, 2, 3, 1, 2, 3 ]
    // array of arguments
    const argList = arr.slice(1,) // [ 2, 3 ]

    for(let i = 0; i < arrList.length; i++){
        // check if each element from arrList exist in argList
        // if not exist push that element into new array
        if(argList.indexOf(arrList[i]) == -1){
            newArr.push(arrList[i]);
        }
        // console.log(arrList.indexOf(argList[i]));
    }
    return newArr;
}
// console.log(destroyer1([1, 2, 3, 1, 2, 3], 2, 3)); // [ 1, 1 ]

// solve using filter and array.includes(item)
// filter method creates new array with elements that pass a condition
// includes method return boolean value, true if element found in the array and false if not
function destroyer2(...arr){
    // array element
    const arrList = arr[0];
    // array of numbers or strings, starts at index 1 to n number of elements
    const argList = arr.slice(1)
    // filter has callback function that check if any element of arrList doesn't
    // exist in argList return that element for new array
    const newArr =  arrList.filter(element => !argList.includes(element));

    return newArr;
}
// console.log(destroyer1([1, 2, 3, 1, 2, 3], 2, 3)); // [ 1, 1 ]
