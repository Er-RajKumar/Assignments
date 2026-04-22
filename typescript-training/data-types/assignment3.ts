// ============================================================
// ASSIGNMENT 3 - ARRAYS, DATA TYPES & OPERATORS
// ============================================================
// We have two arrays: student names and their marks.
// Goal:
//   1. Add 10 marks to each student using assignment operators
//   2. Store the updated marks in a new array
//   3. Calculate and print the average of updated marks
// ============================================================

// --- Original Data ---
// string[] means: an array that holds only string values
const studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];

// number[] means: an array that holds only number values
const originalMarks: number[] = [75, 80, 82];

// --- Array to store updated marks ---
// We create an empty array of numbers to fill later
const updatedMarks: number[] = [];

// ============================================================
// STEP 1: Add 10 marks to each student using a loop
// ============================================================
// 'let i = 0'               → start from first student (index 0)
// 'i < studentNames.length' → keep going until last student
// 'i++'                     → move to next student after each loop

for (let i = 0; i < studentNames.length; i++) {

  // WHY '!' (non-null assertion)?
  // TypeScript strict mode warns: "array[i] might be undefined"
  // Because arrays CAN be accessed out of bounds (e.g., index 99 on a 3-item array)
  // Since we know our loop stays within bounds, we use '!' to tell TypeScript:
  // "Trust me — this value definitely exists at this index."
  // Without '!', TypeScript gives error: "Object is possibly 'undefined'"

  const newMark: number = originalMarks[i]! + 10; // '!' fixes the undefined warning
  updatedMarks.push(newMark);
}

// ============================================================
// STEP 2: Print updated marks for each student
// ============================================================
console.log("Updated Marks:");

for (let i = 0; i < studentNames.length; i++) {
  // Again using '!' on both arrays to suppress undefined warnings
  console.log(`${studentNames[i]!}: ${updatedMarks[i]!}`);
}

// ============================================================
// STEP 3: Calculate average of updated marks
// ============================================================
let totalMarks: number = 0;

for (let i = 0; i < updatedMarks.length; i++) {
  totalMarks += updatedMarks[i]!; // '!' tells TypeScript this index is safe
}

// Average = Total ÷ Number of students
// '.toFixed(1)' shows exactly 1 decimal place → e.g. 89.0
const averageMarks: number = totalMarks / updatedMarks.length;

console.log(`Average Marks: ${averageMarks.toFixed(1)}`);
