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

// DAY 2
// Wherefore art thou
function whatIsInAName(collection, source) {
    // create new array
    const newArr = [];
    // create array for boolean values
    let boolArr = [];
    
    // for loop to check every element of array
    // the elements are object
    for(let i = 0; i < collection.length; i++){
        // use for in loop to check every property of source object
        for(const prop in source){
            // condition to return boolean value
            // if the collection property value matches to the source property value
            // push boolean for every property
            boolArr.push(collection[i][prop] == source[prop]);
        }
        // if no false element in boolArr, push object in the new array
        if(!boolArr.includes(false)){
            newArr.push(collection[i])
        }
        // empty boolArr for next loop for next object
        boolArr = [];
    }
    return newArr;
}
  
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// [ { first: 'Tybalt', last: 'Capulet' } ]

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })); 
// [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]

// Spinal Tap Case is lower case words joined by dashes
function spinalCase(str) {
    // put space between lowercase letter and uppercase letter
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // replace whitespaces and underscores with "-"
    str = str.replace(/\s+|_/g, "-").toLowerCase();

    return str 
}
// console.log(spinalCase('This Is Spinal Tap')); // this-is-spinal-tap
// console.log(spinalCase("The_Andy_Griffith_Show")); // the-andy-griffith-show
// console.log(spinalCase("AllThe-small Things")); // all-the-small-things

// DAY 3
// Pig Latin
function translatePigLatin(str) {
    // match one or more consonant on the beginning of a string
    const consonant = str.match(/^[bcdfghjklmnpqrstvwxyz]+/);
    // match one vowel at any index of a string and one or more letters 
    const vowel = str.match(/[aeiou][a-z]+/gi);
    // if consonant is null or not found on a string on the beginning of a string
    if(consonant === null){
        str = vowel + "way";
    }
    // if vowel is not found at any index of a string
    else if(vowel == null){
        str = consonant + "ay";
    }
    // if both matched or found
    else{
        str = vowel + consonant +"ay";
    }
    return str;
}
   
// console.log(translatePigLatin("consonant")); // onsonantcay
// console.log(translatePigLatin("algorithm")) // algorithmway
// console.log(translatePigLatin("rhythm")); // rhythmay
  
// Search and Replace
function myReplace(str, before, after) {
    // check if first letter of before is uppercase
    const isUpperCase = before.charAt(0) === before.charAt(0).toUpperCase();
    // if isUpperCase is true
    if(isUpperCase === true){
        // convert first letter of after to uppercase
        // concat to the rest of letters
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }else{
        // else if before first letter is lowercase
        // convert first letter of after to lowercase as well
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // replace before by after
    str = str.replace(before, after);
    return str;
}
  
// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// A quick brown fox leaped over the lazy dog

// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// He is Sitting on the couch

// DAY 4
// DNA or Deoxyrebonucleic Acid
// Pairs of DNA strands consist of nucleobase pair represented by the characters 
// AT and CG which form building blocks of DNA double helix
function pairElement(str) {
    const newArr = []
    str = str.split("")
    for(let i in str){
      // str[i]
      switch(str[i]){
        case "C":
          newArr.push(["C", "G"]);
          break;
        case "G":
          newArr.push(["G", "C"]);
          break;
        case "A":
          newArr.push(["A", "T"]);
          break;
        case "T":
          newArr.push(["T", "A"]);
          break;
      }
    }
    return newArr;
}
// console.log(pairElement("GCG")); // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
// console.log(pairElement("TTGAG"));
// [ [ 'T', 'A' ], [ 'T', 'A' ], [ 'G', 'C' ], [ 'A', 'T' ], [ 'G', 'C' ] ]

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // find the starting letter and slice the alphabet based on the first letter of str value
    for(let i in alphabet){
      if(str[0] === alphabet[i]){
        alphabet = alphabet.slice(i);
      }
    }
    // if not alphabet length is not equal to str length
    if(alphabet.length !== str.length){
      // find the missing letter
      for(let j in alphabet){
        if((alphabet[j] === str[j]) === false){
          str = alphabet[j]
          break;
        }
      }
    }else{
      str = undefined;
    }
    return str;
  }  
// console.log(fearNotLetter("abce")); // d
// console.log(fearNotLetter("stvwx")); // u
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined 

// DAY 5
// Sorted union, return an array and there should not be a duplicated element
function uniteUnique(...arr) {
  // merge all the arrays
  let mergeArr = [].concat(...arr)

  // check if the elements of mergeArr exist in the newArr
  let newArr = [];
  for(let i = 0; i < mergeArr.length; i++){
    // if not exist, push the current element in the newArr
    if(!newArr.includes(mergeArr[i])){
      newArr.push(mergeArr[i])
    }
  }
  return newArr;
}

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [ 1, 3, 2, 5, 4 ]
// console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); // [ 1, 3, 2, 5, 4, 6 ]
// console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); // [ 1, 3, 2, 5, 4 ]

// Convert to HTML entities
function convertHTML(str) {
  // str to array
  let arr = str.split("");
  // find the special character 
  for(let i in arr){
    // change to corresponding html entity the current arr[i] or special character
    switch(arr[i]){
      case "&":
        arr[i] = "&amp;"
        break;
      case "<":
        arr[i] = "&lt;";
        break;
      case ">":
        arr[i] = "&gt;";
        break;
      case "\"":
        arr[i] = "&quot;";
        break;
      case "'":
        arr[i] = "&apos;";
        break;
    }
  }
  arr = arr.join("")
  return arr;
}

// console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana
// console.log(convertHTML("Hamburgers < Pizza < Tacos")); // Hamburgers &lt; Pizza &lt; Tacos
// console.log(convertHTML("<>")); // &lt;&gt;