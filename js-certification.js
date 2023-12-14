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

// Telephone checker
// The following are examples of valid formats for US numbers 
// (refer to the tests below for other variants):
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// This is not finished yet, pattern should be fixed to return the correct boolean
function telephoneCheck(str) {
  let result;
  if(str.length > 9){
    // let regex = 
    // result = /[\d-\s]*([(]+\d+[)]+|\d+)[-\s\d]+/.test(str);
    result = str.match(/[1\s]*([(]+\d+[)]|-*\s*\d)+-*\s*\d+/g);
    
    if(result.join("") == str){
      result = true;
    }else{
      result = false;
    }
  }else{
    result = false;
  }
  return result; 
}

// console.log(telephoneCheck("555-555-5555")); // true
// console.log(telephoneCheck("1 555-555-5555")); // true  
// console.log(telephoneCheck("1 (555) 555-5555")); // true
// console.log(telephoneCheck("5555555555")); // true
// console.log(telephoneCheck("1 555)555-5555")); // false
// console.log(telephoneCheck("555-5555")); // false
// console.log(telephoneCheck("-1 (757) 622-7382"))
  
  
  