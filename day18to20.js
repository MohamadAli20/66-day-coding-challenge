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
// console.log(palindrome("1 eye for of 1 eye.")); // false
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
  let result = false;
  // match numbers only and get the length
  let lengthNum = str.match(/\d+/g).join('').length;
  if(lengthNum === 10){ // meaning without 1 at the beginning    
    result = str.match(/([(]+\d\d\d[)]\s*|\d\d\d[-\s]*)\d\d\d[-\s]*\d\d\d\d/g);

    if(result !== null){
      if(result.join('') === str){
        result = true;
      }else{
        result = false;
      }
    }else{ // if result equal to null
      result = false;
    }
  }else if(lengthNum === 11){ // meaning with 1 at the beginning
    result = str.match(/(1)\s*([(]+\d\d\d[)]\s*|\d\d\d[-\s]*)\d\d\d[-\s]*\d\d\d\d/g);
    if(result !== null){
      if(result.join('') === str){
        result = true;
      }else{
        result = false;
      }
    }else{ // if result equal to null
      result = false;
    }
  }
  return result; 
}
// Tests
// console.log(telephoneCheck("555-555-5555")) // should return a boolean.
// console.log(telephoneCheck("1 555-555-5555")) // should return true.
// console.log(telephoneCheck("1 (555) 555-5555")) //should return true.
// console.log(telephoneCheck("5555555555")); //should return true.
// console.log(telephoneCheck("555-555-5555")); //should return true.
// console.log(telephoneCheck("(555)555-5555")); //should return true.
// console.log(telephoneCheck("1(555)555-5555")); //should return true.
// console.log(telephoneCheck("555-5555")); //should return false.
// console.log(telephoneCheck("5555555")); //should return false.
// console.log(telephoneCheck("1 555)555-5555")) //should return false.
// console.log(telephoneCheck("1 555 555 5555")) //should return true.
// console.log(telephoneCheck("1 456 789 4444")); //should return true.
// Waiting:telephoneCheck("123**&!!asdf#") //should return false.
// console.log(telephoneCheck("55555555")) //should return false.
// console.log(telephoneCheck("(6054756961)")); //should return false.
// console.log(telephoneCheck("2 (757) 622-7382")); //should return false.
// Waiting:telephoneCheck("0 (757) 622-7382") //should return false.
// Waiting:telephoneCheck("-1 (757) 622-7382") //should return false.
// Waiting:telephoneCheck("2 757 622-7382") //should return false.
// console.log(telephoneCheck("10 (757) 622-7382")) // should return false.
// console.log(telephoneCheck("27576227382")) //should return false.
// Waiting:telephoneCheck("(275)76227382") should return false.
// Waiting:telephoneCheck("2(757)6227382") should return false.
// Waiting:telephoneCheck("2(757)622-7382") should return false.
// Waiting:telephoneCheck("555)-555-5555") should return false.
// Waiting:telephoneCheck("(555-555-5555") should return false.
// Waiting:telephoneCheck("(555)5(55?)-5555") should return false.
// console.log(telephoneCheck("55 55-55-555-5")) //should return false.
// console.log(telephoneCheck("11 555-555-5555")) //should return false

// Roman Numeral Converter
// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.
function convertToRoman(num) {
  let romanNumerals  = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let arabicNumerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let result = '';
  // loop through roman numerals from the biggest number to lowest
  for(let i = 0; i < romanNumerals.length; i++){
    // loop while num is greater or equal to arabic numerals
    while(num >= arabicNumerals[i]){
      // subtract the current arabic numeral from current num value
      // Example: num is 11 so, 10 - 10 = 1 
      num -= arabicNumerals[i];
      // add current roman numeral to the result
      // X is equivalent of 10 in roman, add X to the result
      result += romanNumerals[i];
      // continue until equivalent of 1 is added to result which I
    }
  }
  return result; // XI
}

// console.log(convertToRoman(3)); // III
// console.log(convertToRoman(12)); // XII
// console.log(convertToRoman(3999)); // MMMCMXCIX

// Tests
// Waiting:convertToRoman(2) should return the string II.
// Waiting:convertToRoman(3) should return the string III.
// Waiting:convertToRoman(4) should return the string IV.
// Waiting:convertToRoman(5) should return the string V.
// Waiting:convertToRoman(9) should return the string IX.
// Waiting:convertToRoman(12) should return the string XII.
// Waiting:convertToRoman(16) should return the string XVI.
// Waiting:convertToRoman(29) should return the string XXIX.
// Waiting:convertToRoman(44) should return the string XLIV.
// Waiting:convertToRoman(45) should return the string XLV.
// Waiting:convertToRoman(68) should return the string LXVIII
// Waiting:convertToRoman(83) should return the string LXXXIII
// Waiting:convertToRoman(97) should return the string XCVII
// Waiting:convertToRoman(99) should return the string XCIX
// Waiting:convertToRoman(400) should return the string CD
// Waiting:convertToRoman(500) should return the string D
// Waiting:convertToRoman(501) should return the string DI
// Waiting:convertToRoman(649) should return the string DCXLIX
// Waiting:convertToRoman(798) should return the string DCCXCVIII
// Waiting:convertToRoman(891) should return the string DCCCXCI
// Waiting:convertToRoman(1000) should return the string M
// Waiting:convertToRoman(1004) should return the string MIV
// Waiting:convertToRoman(1006) should return the string MVI
// Waiting:convertToRoman(1023) should return the string MXXIII
// Waiting:convertToRoman(2014) should return the string MMXIV
// Waiting:convertToRoman(3999) should return the string MMMCMXCIX


function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let totalCID = 0;

  // Calculate the total amount in the cash drawer (totalCID)
  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }

  totalCID = parseFloat(totalCID.toFixed(2)); // Fix floating-point precision issue

  // Check if there is insufficient funds
  if (changeDue > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Check if the cash drawer is closed
  if (changeDue === totalCID) {
    return { status: "CLOSED", change: cid };
  }

  // Calculate the change
  let change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const unit = currencyUnit[cid[i][0]];
    const maxAvailable = cid[i][1];
    const maxChange = Math.floor(maxAvailable / unit) * unit;
    if (changeDue >= unit) {
      let returned = 0;
      while (changeDue >= unit && returned < maxChange) {
        changeDue -= unit;
        returned += unit;
        changeDue = parseFloat(changeDue.toFixed(2));
      }
      change.push([cid[i][0], returned]);
    }
  }
  // Check if there is not enough change
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
}

// Test cases
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
