// ============================================================
// ASSIGNMENT 6 - PRIME NUMBER CHECKER
// ============================================================
// A Prime Number is a number GREATER THAN 1 that is only
// divisible by 1 and itself.
//
// Examples:
//   7  → Prime   (divisible only by 1 and 7)
//   25 → Not Prime (divisible by 1, 5, 25)
//   1  → Not Prime (rule: must be greater than 1)
// ============================================================

// ============================================================
// COMMON METHOD: isPrime(n)
// ============================================================
// Input  → number (n)
// Output → boolean (true if prime, false if not)

function isPrime(n: number): boolean {

  // RULE 1: Numbers <= 1 are never prime
  if (n <= 1) {
    return false;
  }

  // RULE 2: 2 is the only even prime number
  if (n === 2) {
    return true;
  }

  // RULE 3: Any other even number is NOT prime
  // (because it's divisible by 2)
  if (n % 2 === 0) {
    return false;
  }

  // RULE 4: Check divisibility from 3 up to √n
  // WHY √n? Because if n has a factor larger than √n,
  // its paired factor would be smaller than √n — already checked.
  // This makes the check faster (we don't need to go all the way to n).
  // We check only ODD numbers (i += 2) since even divisors are already ruled out.

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      // Found a divisor → NOT a prime number
      return false;
    }
  }

  // No divisors found → it IS a prime number
  return true;
}

// ============================================================
// TEST CASES
// ============================================================

// Helper function to print result clearly
function checkAndPrint(n: number): void {
  const result: boolean = isPrime(n);
  console.log(`Input: n = ${n}`);
  console.log(`Output: ${result}`);
  console.log(`Explanation: ${n} is ${result ? "a PRIME number ✅" : "NOT a prime number ❌"}`);
  console.log("----------------------------------------");
}

console.log("============================================================");
console.log("             PRIME NUMBER CHECKER");
console.log("============================================================");

checkAndPrint(7);   // Expected: true  (divisors: 1, 7)
checkAndPrint(25);  // Expected: false (divisors: 1, 5, 25)
checkAndPrint(1);   // Expected: false (rule: must be > 1)
checkAndPrint(2);   // Expected: true  (smallest prime)
checkAndPrint(13);  // Expected: true
checkAndPrint(100); // Expected: false

console.log("============================================================");
