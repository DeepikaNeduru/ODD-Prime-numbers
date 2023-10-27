//To calculate number of ODD that are prime  in between 0 and 10 million

/**
 * function isPrime to check the prime number
 */
function isPrime(num) {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false
      }
    }
  
    return true
  }
  //function to check for the ODD number
  function isODD(num) {
    const numStr = num.toString()
    for (let i = 0; i < numStr.length - 1; i++) {
      const digit1 = parseInt(numStr[i])
      const digit2 = parseInt(numStr[i + 1])
      if (Math.abs(digit1 - digit2) !== 1) {
        return false
      }
    }
    return true
  }
  
  function countPrimeODDNumbers(limit) {
    let counter = 0
    for (let i = 2; i <= limit; i++) {
      if (isODD(i) && isPrime(i)) {
        counter++
      }
    }
    return counter
  }
  
  const limit = 10000000; // 10 million
  const primeODDCount = countPrimeODDNumbers(limit)
  
  console.log(`The number of prime one-digit-difference numbers between 0 and ${limit} is: ${primeODDCount}`)