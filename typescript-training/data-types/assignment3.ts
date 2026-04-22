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
// 'let i = 0' → start from first student (index 0)
// 'i < studentNames.length' → keep going until last student
// 'i++' → move to next student after each loop
for (let i = 0; i < studentNames.length; i++) {

  // '+= 10' is the assignment operator that means: add 10 to current mark
  // Example: if mark is 75, then 75 += 10 becomes 85
  const newMark: number = originalMarks[i] + 10;

  // Push (add) the new mark to the updatedMarks array
  updatedMarks.push(newMark);
}

// ============================================================
// STEP 2: Print updated marks for each student
// ============================================================
console.log("Updated Marks:");
for (let i = 0; i < studentNames.length; i++) {
  // Print each student name with their updated mark
  console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}

// ============================================================
// STEP 3: Calculate average of updated marks
// ============================================================

// First calculate the total (sum) of all updated marks
let totalMarks: number = 0;

for (let i = 0; i < updatedMarks.length; i++) {
  // '+= ' adds each mark to the running total
  totalMarks += updatedMarks[i];
}

// Average = Total ÷ Number of students
// We use '.toFixed(1)' to show exactly 1 decimal place (e.g. 89.0)
const averageMarks: number = totalMarks / updatedMarks.length;

console.log(`Average Marks: ${averageMarks.toFixed(1)}`);
