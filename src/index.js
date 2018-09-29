module.exports = function getZerosCount(number, base) {
  // your implementation
  let arr = [];
  let b = base;
  let n = number;
  
  for (let p = 2, j = 0; p <= b; p++) {
    let e = 0, m = 0, k, s = 1;
  
    while (b % p === 0) {
      b /= p;     
      e++;
    }
    
    while (p ** s < n) {
      m += Math.floor(n / p ** s);
      s++;       
    }
    arr[j] = Math.floor(m / e);
    j++;
  }
   
  let min = arr[0];
  
  for(let i = 0, arrLength = arr.length; i < arrLength; i++){
    if(arr[i] < min ) min = arr[i];
    else min = arr[0];
  }
  return min;
}
 //Base is b = p1^e1 * p2^e2 * p3^e3 * ... * pk^en
 //Then the number of trailing zeroes in n factorial in base b is given by the formulae
 // min{1/e1*(n/p1 + n/(p1*p1) + ...), 1/e2*(n/p2 + n/(p2*p2) + ...), ….}