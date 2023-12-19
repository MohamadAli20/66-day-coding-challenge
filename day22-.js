// DAY 22
function factorial(num){
  let result = 1;
  for(let i = 1; i <= num; i++){
      result *= i;
  }
  return result;
}

function swapTowardCenter(arr){
  let j = arr.length - 1;
  for(let i = 0; arr.length > i / 2; i++){
      let tempVar = arr[i];
      arr[i] = arr[j];
      arr[j] = tempVar;
      j--;
  }
  return arr;
}

function threesFives(num){
  let sum = 0;
  for(let i = 1; i <= num; i++){
      if(i % 3 == 0 || i % 5 == 0){
          
      }else{
          sum += i
      }
  }
  return sum;
}

function fibonacci(index){
  let fibo = [0, 1];
  let sum = 0;
  let j = 1; 
  for(let i = 0; i < index+1; i++){
      if(index === 0){
          sum = 0;   
      }else if(index === 1){
          sum += fibo[i];
          fibo.push(sum);
      }else{
          sum += fibo[i];
          fibo.push(sum);
      }
  }
  return sum;
}

function sumToOne(num) {
  let arr = String(num).split('');
  let sum = 0;
  for(let i in arr){
      sum += parseInt(arr[i]);
  }
  arr = String(sum).split('');
  sum = 0;
  for(let j in arr){
      sum += parseInt(arr[j]);
  }
  arr = String(sum).split('');
  sum = 0;
  for(let k in arr){
      sum += parseInt(arr[k]);
  }
  return sum;
}

function isPrime(num){
  let flag = 0;
  for(let i = 1; i <= num; i++){
      if(num % i === 0){
          flag++;
      }
  }
  if(flag === 2){
      return true;    
  }
  return false;
}

function extractDigit(num,digitNum){
  let len = String(num).length - 1;
  let result = 0;
  for(digitNum; digitNum >= 0; digitNum--){
      if(digitNum === 0){
          result = String(num)[len];
          break;
      }
      len--;
      
  }
  return result;
}
// DAY 23
function reverse(arr){
  let revArr = [];
  for(let len = arr.length - 1; len >= 0; len--){
      revArr.push(arr[len]);
  }
  return revArr;
}

function filterRange(arr, min, max){
  let newArr = []
  for(let i in arr){
      if(arr[i] > min && arr[i] < max){
          newArr.push(arr[i]);
      }
  }
  return newArr;
}

function arrayConcat(arr1, arr2){
  let newArr = arr1.concat(arr2);
  return newArr;
}
// DAY 24
// Skyline Heights
function heights(arr){
  let newArr = []; //[-1, 1, 1, 7, 3]
  let situatedLevel = 1;
  for(let i in arr){
      if(arr[i] >= situatedLevel && !newArr.includes(arr[i])){
          newArr.push(arr[i]);
          situatedLevel = arr[i];
      }
  } 
  return newArr;
}
// Test Cases (4/4)
// heights( [-1, 1, 1, 7, 3] ) to return [1,7]
// heights( [0, 4] ) to return [4]
// heights( [-1, 1, 1, 7, 3, 5, 9] ) to return [1,7,9]
// heights( [-1, 1, 1, 7, 3, 5, 9, -3, 3, 15] ) to return [1,7,9,15]

function secondToLast(arr){
  for(let i in arr){
    if(arr.length !== 1){
        return arr[arr.length - 2];
    }else{
        return null;
    }
  }
}
// Test Cases (4/4)
// secondToLast( [42,true,4,"Kate",7] ) to return Kate
// secondToLast([42,true,4,"Kate",7, 9] ) to return 7
// secondToLast([42,true,4,"Kate",7, 9, "dojo", "awesome"]) to return dojo
// secondToLast([1]) to return null

function nToLast(arr, n){
  let result = null;
  for(let len = arr.length - 1; n >= 1; len--){ // 3 > 0, 4 < 5 5 
      if(n === 1 && len != 0){
          return arr[len];
      }else if(len === 0){
          return null
      }
      n--
  }
  return newArr;
}
// Test Cases (5/5)
// nToLast( [5,2,3,6,4,9,7], 3 ) to return 4
// nToLast( [1,2], 3 ) to return null
// nToLast( [5,2,3,6,4,9,7], 4 ) to return 6
// nToLast( [5,2,3,6,4,9,7], 5 ) to return 3
// nToLast( [1,2,3,5,5,7,10], 1 ) to return 10

function removeRange(arr, start, end){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
      if(i < start || i > end){
          newArr.push(arr[i]);
      }
  }
  return newArr;
}
// Test Cases (4/4)
// removeRange([20,30,40,50,60,70],2,4) to return [20,30,70]
// removeRange([20,30,40,50,60,70],1,3) to return [20,60,70]
// removeRange([20,30,40,50,60,70],1,4) to return [20,70]
// removeRange([1,2,3,4,5,6],2,5) to return [1,2]

function isCreditCardValid(digitArr){
  let newArr = digitArr.slice(0, digitArr.length - 1);
  // multiply the digits in odd positions
  let len = newArr.length - 1;
  for(let i = 1; len > 0; len--){
      // multiply by 2 all digits in odd position
      if(i % 2 === 1){
          newArr[len] *= 2;
      }
      i++;
  }
  // if any results larger than 9 , subtract 9 from them
  newArr = newArr.map(item => {
      if(item > 9){
          item -= 9;
      }
      return item;
  });
  // add all numbers
  sum = newArr.reduce((acc, item) => acc += item);
  // add the last digit
  sum += digitArr[digitArr.length - 1];
  // check if multiple of 10
  if(sum % 10 == 0){
      return true;
  }else{
      return false;
  }
}
// Test Cases (4/4)
// isCreditCardValid( [5, 2, 2, 8, 2] ) to return true
// isCreditCardValid( [5, 2, 3, 8, 2] ) to return false
// isCreditCardValid( [4,2,2,2,2,2,2,2,2,2,2,2,2] ) to return true
// isCreditCardValid( [4,0,1,2,8,8,8,2,5,6,8,8,1,8,9,1] ) to return false

function zipIt(arr1, arr2){
  let newArr = [];
  // get the length
  let lenArr1 = arr1.length;
  let lenArr2 = arr2.length;
  for(let i = 0; i < (lenArr1 + lenArr2) - 1; i++){
      if(lenArr1 !== 0 && lenArr2 !== 0){
          newArr.push(arr1[i]);
          newArr.push(arr2[i]);
      }
      else if(lenArr1 !== 0 && lenArr2 === 0){
          newArr.push(arr1[i]);
      }
      else if(lenArr2 !== 0 && lenArr1 === 0){
          newArr.push(arr2[i]);
      }
  }
  // remove all null value
  newArr = newArr.filter(item => item != null);
  return newArr;
}
// Test Cases (5/5)
// zipIt([1,2], [10,20,30,40 ]) to return [1,10,2,20,30,40]
// zipIt([1,2,3,4], [10,20 ]) to return [1,10,2,20,3,4]
// zipIt([1,2,3,4], [10,20,30,40 ]) to return [1,10,2,20,3,30,4,40]
// zipIt([1], [10,20 ]) to return [1,10,20]
// zipIt([1,2,3], [10 ]) to return [1,10,2,3]
