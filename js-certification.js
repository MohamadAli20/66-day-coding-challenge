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
// console.log(palindrome("A man, a plan, a canal. Panama")); // true
  
// Caesars Cipher
function rot13(str) {
  let arr = str.split('');
  let cipher = {
    'A':'N',
    'B':'O',
    'C':'P',
    'D':'Q',
    'E':'R',
    'F':'S',
    'G':'T',
    'H':'U',
    'I':'V',
    'J':'W',
    'K':'X',
    'L':'Y',
    'M':'Z'
  }
  // find the corresponding letter
  for(let i in str){
    for(let letter in cipher){
      if(str[i] === letter){
        arr[i] = cipher[letter];
      }else if(str[i] === cipher[letter]){
        arr[i] = letter;
      }
    }
  }
  // join
  return arr.join("");
}
// console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
// console.log(rot13("SERR CVMMN!")); //  FREE PIZZA!
// console.log(rot13("SERR YBIR?")); // FREE LOVE?
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.