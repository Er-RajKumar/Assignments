// ============================================================
// ASSIGNMENT 2 - CONDITIONAL STATEMENTS (LOAN ELIGIBILITY)
// ============================================================
// We build a function that checks if a bank customer qualifies
// for a loan based on 4 criteria:
//   1. Credit Score
//   2. Income
//   3. Employment Status
//   4. Debt-to-Income Ratio (DTI)
// ============================================================

// --- Define a clear structure (interface) for a loan applicant ---
// An interface in TypeScript is like a "template" that says what
// properties an object must have, and what types they should be.
interface LoanApplicant {
  customerName: string;
  creditScore: number;
  income: number;
  isEmployed: boolean;
  debtToIncomeRatio: number; // expressed as percentage e.g. 35 means 35%
}

// --- Main function that evaluates loan eligibility ---
// This function takes one applicant object and prints the result.
function evaluateLoanEligibility(applicant: LoanApplicant): void {

  console.log(`\n========================================`);
  console.log(`Loan Evaluation for: ${applicant.customerName}`);
  console.log(`========================================`);
  console.log(`  Credit Score       : ${applicant.creditScore}`);
  console.log(`  Income             : $${applicant.income}`);
  console.log(`  Employed           : ${applicant.isEmployed}`);
  console.log(`  Debt-to-Income     : ${applicant.debtToIncomeRatio}%`);
  console.log(`----------------------------------------`);

  // ---- STEP 1: Check Credit Score ----
  if (applicant.creditScore > 750) {
    // Credit score is excellent - no further checks needed
    console.log("✅ Result: LOAN APPROVED");
    console.log("   Reason: Excellent credit score (above 750).");

  } else if (applicant.creditScore >= 650 && applicant.creditScore <= 750) {
    // Credit score is in the middle range - need more checks
    console.log("🔍 Credit score in mid-range (650–750). Performing additional checks...");

    // ---- STEP 2: Check Income ----
    if (applicant.income < 50000) {
      // Income is too low - deny the loan
      console.log("❌ Result: LOAN DENIED");
      console.log("   Reason: Income is below $50,000.");

    } else {
      // Income is sufficient - check employment
      console.log(`   Income check passed ($${applicant.income} >= $50,000).`);

      // ---- STEP 3: Check Employment Status ----
      if (!applicant.isEmployed) {
        // Customer is unemployed - deny the loan
        console.log("❌ Result: LOAN DENIED");
        console.log("   Reason: Customer is not employed.");

      } else {
        // Customer is employed - check DTI ratio
        console.log("   Employment check passed (employed).");

        // ---- STEP 4: Check Debt-to-Income Ratio ----
        if (applicant.debtToIncomeRatio < 40) {
          // DTI is acceptable - approve the loan
          console.log("✅ Result: LOAN APPROVED");
          console.log(`   Reason: All checks passed. DTI ratio (${applicant.debtToIncomeRatio}%) is below 40%.`);

        } else {
          // DTI is too high - deny the loan
          console.log("❌ Result: LOAN DENIED");
          console.log(`   Reason: DTI ratio (${applicant.debtToIncomeRatio}%) is 40% or above.`);
        }
      }
    }

  } else {
    // Credit score is below 650 - deny immediately
    console.log("❌ Result: LOAN DENIED");
    console.log("   Reason: Credit score is below 650.");
  }

  console.log(`========================================\n`);
}

// ============================================================
// TEST DATA - from the assignment
// ============================================================
const applicant1: LoanApplicant = {
  customerName: "John Doe",
  creditScore: 720,       // Between 650–750, so additional checks apply
  income: 55000.0,        // Above $50,000 ✅
  isEmployed: true,       // Employed ✅
  debtToIncomeRatio: 35.0 // Below 40% ✅ → Should be APPROVED
};

// Run the evaluation
evaluateLoanEligibility(applicant1);

// ============================================================
// EXTRA TEST CASES - to verify all branches work correctly
// ============================================================

// Test: Credit score above 750 → auto approved
const applicant2: LoanApplicant = {
  customerName: "Alice Smith",
  creditScore: 800,
  income: 30000,
  isEmployed: false,
  debtToIncomeRatio: 50
};
evaluateLoanEligibility(applicant2);

// Test: Credit score below 650 → denied immediately
const applicant3: LoanApplicant = {
  customerName: "Bob Jones",
  creditScore: 600,
  income: 60000,
  isEmployed: true,
  debtToIncomeRatio: 20
};
evaluateLoanEligibility(applicant3);

// Test: Mid-range score but income too low → denied
const applicant4: LoanApplicant = {
  customerName: "Carol White",
  creditScore: 700,
  income: 40000,
  isEmployed: true,
  debtToIncomeRatio: 30
};
evaluateLoanEligibility(applicant4);

// Test: Mid-range score, good income, but unemployed → denied
const applicant5: LoanApplicant = {
  customerName: "David Brown",
  creditScore: 700,
  income: 55000,
  isEmployed: false,
  debtToIncomeRatio: 30
};
evaluateLoanEligibility(applicant5);

// Test: Mid-range score, good income, employed, but high DTI → denied
const applicant6: LoanApplicant = {
  customerName: "Eve Davis",
  creditScore: 700,
  income: 55000,
  isEmployed: true,
  debtToIncomeRatio: 45
};
evaluateLoanEligibility(applicant6);
