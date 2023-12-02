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
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [ 4 ]