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

