// ============================================================
// ASSIGNMENT 5 - EMPLOYEE HIKE CALCULATION
// (Conditional Statements, Loops & Map Collection)
// ============================================================
// For each employee, calculate:
//   Hike = (Base Salary × Variable Pay %) + Bonus + Reward
//   Hike % = Hike / Base Salary
//
// Rating Rules:
//   >= 4.0          → Variable Pay = 15%, Bonus = 1500
//   >= 3.0 and < 4  → Variable Pay = 10%, Bonus = 1200
//   < 3.0           → Variable Pay = 3%,  Bonus = 300
//
// Extra Perk:
//   Experience >= 5 years → Reward = 5000 (else Reward = 0)
// ============================================================

// ============================================================
// STEP 1: Define the structure of one Employee using Interface
// ============================================================
// An interface is like a "blueprint" — it tells TypeScript
// exactly what fields an employee object must have and their types.

interface Employee {
  name: string;           // Employee full name
  baseSalary: number;     // Base salary in dollars
  experience: number;     // Years of experience (can be decimal e.g. 5.1)
  rating: number;         // Year-end rating out of 5 (e.g. 4.2)
}

// ============================================================
// STEP 2: Store all 5 employees in an array of Employee objects
// ============================================================
// Employee[] means: an array where every item follows the Employee interface

const employees: Employee[] = [
  { name: "Alice Johnson", baseSalary: 75000.0, experience: 5.1, rating: 4.2 },
  { name: "Bob Smith",     baseSalary: 68000.0, experience: 3.2, rating: 3.8 },
  { name: "Carol Davis",   baseSalary: 82000.0, experience: 7.1, rating: 4.5 },
  { name: "David Brown",   baseSalary: 90000.0, experience: 10.2, rating: 2.5 },
  { name: "Eva Green",     baseSalary: 60000.0, experience: 2.4, rating: 3.5 },
];

// ============================================================
// STEP 3: Create a Map to store EmployeeName → HikePercentage
// ============================================================
// Map is a key-value collection (like a dictionary)
// Map<string, number> means:
//   Key   = string (employee name)
//   Value = number (hike percentage)

const hikePercentageMap = new Map<string, number>();

// ============================================================
// STEP 4: Loop through each employee and calculate hike
// ============================================================

console.log("============================================================");
console.log("           EMPLOYEE HIKE CALCULATION REPORT");
console.log("============================================================");

for (let i = 0; i < employees.length; i++) {

  const emp = employees[i]!; // '!' tells TypeScript: this index is always valid

  // ----------------------------------------------------------
  // STEP 4a: Determine Variable Pay % and Bonus based on Rating
  // ----------------------------------------------------------
  let variablePayPercent: number;  // Will be set based on rating
  let bonus: number;               // Will be set based on rating

  if (emp.rating >= 4.0) {
    // Excellent rating
    variablePayPercent = 15.0;
    bonus = 1500;

  } else if (emp.rating >= 3.0 && emp.rating < 4.0) {
    // Good rating
    variablePayPercent = 10.0;
    bonus = 1200;

  } else {
    // Below average rating (< 3.0)
    variablePayPercent = 3.0;
    bonus = 300;
  }

  // ----------------------------------------------------------
  // STEP 4b: Check for Extra Reward based on Experience
  // ----------------------------------------------------------
  // Employees with 5 or more years of experience get ₹5000 extra
  let reward: number = 0; // Default: no reward

  if (emp.experience >= 5) {
    reward = 5000; // Extra perk for senior employees
  }

  // ----------------------------------------------------------
  // STEP 4c: Calculate Hike Amount
  // ----------------------------------------------------------
  // Formula: Hike = (Base Salary × Variable Pay% / 100) + Bonus + Reward
  // We divide variablePayPercent by 100 to convert % to decimal
  // Example: 15% of 75000 = 75000 × 15 / 100 = 11250

  const hikeAmount: number = (emp.baseSalary * variablePayPercent / 100) + bonus + reward;

  // ----------------------------------------------------------
  // STEP 4d: Calculate Hike Percentage
  // ----------------------------------------------------------
  // Formula: Hike% = Hike / Base Salary
  // We multiply by 100 to convert decimal to percentage for display

  const hikePercent: number = (hikeAmount / emp.baseSalary) * 100;

  // ----------------------------------------------------------
  // STEP 4e: Store result in Map (EmployeeName → HikePercent)
  // ----------------------------------------------------------
  // .set(key, value) adds an entry into the Map
  hikePercentageMap.set(emp.name, hikePercent);

  // ----------------------------------------------------------
  // STEP 4f: Print detailed breakdown for this employee
  // ----------------------------------------------------------
  console.log(`\n👤 Employee    : ${emp.name}`);
  console.log(`   Base Salary  : $${emp.baseSalary.toLocaleString()}`);
  console.log(`   Experience   : ${emp.experience} years`);
  console.log(`   Rating       : ${emp.rating} / 5`);
  console.log(`   Variable Pay : ${variablePayPercent}% → $${(emp.baseSalary * variablePayPercent / 100).toFixed(2)}`);
  console.log(`   Bonus        : $${bonus}`);
  console.log(`   Reward       : $${reward} ${reward > 0 ? "(Experience >= 5 yrs ✅)" : "(Not eligible)"}`);
  console.log(`   Hike Amount  : $${hikeAmount.toFixed(2)}`);
  console.log(`   Hike %       : ${hikePercent.toFixed(4)}`);
}

// ============================================================
// STEP 5: Print the Map — EmployeeName → HikePercentage
// ============================================================
// Map has a built-in .forEach() method
// Each entry gives us: value (hike%), key (employee name)

console.log("\n============================================================");
console.log("       MAP: Employee Name → Hike Percentage");
console.log("============================================================");

hikePercentageMap.forEach((hikePercent: number, employeeName: string) => {
  // .toFixed(4) shows 4 decimal places, matching the expected formula output
  console.log(`  ${employeeName.padEnd(15)} → Hike % : ${hikePercent.toFixed(4)}`);
});

console.log("============================================================");
