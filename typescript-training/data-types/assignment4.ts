// ============================================================
// ASSIGNMENT 4 - BANK TRANSACTIONS (LOOPS + CONDITIONALS)
// ============================================================
// Positive value = Credit (money coming IN to account)
// Negative value = Debit  (money going OUT of account)
//
// Goals:
//   1. Count total credit and debit transactions
//   2. Print total amount credited and debited
//   3. Print remaining balance
//   4. Flag suspicious transactions (amount > +/-10000)
// ============================================================

// --- Store all transactions in an array (number[]) ---
// Positive = Credit, Negative = Debit
const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

// --- Variables to track results ---
let creditCount: number = 0;       // How many credits happened
let debitCount: number = 0;        // How many debits happened
let totalCredited: number = 0;     // Sum of all credited amounts
let totalDebited: number = 0;      // Sum of all debited amounts (stored as positive for display)
let suspiciousCount: number = 0;   // How many transactions exceeded +/- 10000

// ============================================================
// LOOP through each transaction and apply logic
// ============================================================
console.log("========================================");
console.log("        BANK TRANSACTION REPORT");
console.log("========================================");

for (let i = 0; i < transactions.length; i++) {

  const amount: number = transactions[i]; // Get the current transaction amount
  const txNumber: number = i + 1;         // Transaction number (1-based for display)

  // --- Check if Credit or Debit ---
  if (amount > 0) {
    // Positive amount = Credit transaction
    creditCount++;              // Increment credit counter
    totalCredited += amount;    // Add to total credited

  } else {
    // Negative amount = Debit transaction
    debitCount++;               // Increment debit counter
    totalDebited += Math.abs(amount); // Math.abs() converts negative to positive for sum
    // Example: Math.abs(-2000) = 2000
  }

  // --- Check for Suspicious Transaction (exceeds +/- 10,000) ---
  if (Math.abs(amount) > 10000) {
    suspiciousCount++; // Count this as suspicious

    // Determine if it's a suspicious credit or debit for the message
    const transactionType: string = amount > 0 ? "Credit" : "Debit";

    // Print suspicious alert for this transaction
    console.log(`⚠️  Suspicious ${transactionType} Transaction [Tx #${txNumber}] with Amount: ${Math.abs(amount)}`);
  }
}

// ============================================================
// CALCULATE REMAINING BALANCE
// ============================================================
// Balance = Sum of all transactions (credits add, debits subtract)
// We can use reduce() or simply: sum of array values
let remainingBalance: number = 0;
for (let i = 0; i < transactions.length; i++) {
  remainingBalance += transactions[i]; // Credits (positive) add, debits (negative) subtract automatically
}

// ============================================================
// PRINT FINAL SUMMARY
// ============================================================
console.log("----------------------------------------");
console.log(`1. Total Credit Transactions : ${creditCount}`);
console.log(`   Total Debit  Transactions : ${debitCount}`);
console.log("----------------------------------------");
console.log(`2. Total Amount Credited     : ₹${totalCredited.toLocaleString()}`);
console.log(`   Total Amount Debited      : ₹${totalDebited.toLocaleString()}`);
console.log("----------------------------------------");
console.log(`3. Remaining Balance         : ₹${remainingBalance.toLocaleString()}`);
console.log("----------------------------------------");
console.log(`4. Total Suspicious Transactions: ${suspiciousCount}`);
console.log("========================================");
