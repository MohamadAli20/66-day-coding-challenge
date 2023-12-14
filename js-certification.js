// Palindrom Checker
function palindrome(str) {
    // only match letters and numbers
    let splitArr = str.match(/[a-z]+|\d+/gi);
    let joinStr = splitArr.join("").toLowerCase();
    // reverse an array
    let reverseArr = [];
    for(let len = joinStr.length - 1; len >= 0; len--){
      reverseArr.push(joinStr[len]);
    }
    // join reverse array to string
    let reverseStr = reverseArr.join("");
    
    return joinStr === reverseStr;
  }
//   console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
  
  
  