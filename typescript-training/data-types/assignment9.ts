// ============================================================
// ASSIGNMENT 9 - TRIANGLE PATTERN WITH *
// ============================================================
// Print a right-angled triangle using * characters
//
// For rows = 5, expected output:
//   *
//   **
//   ***
//   ****
//   *****
//
// Logic:
//   Row 1 → print 1 star
//   Row 2 → print 2 stars
//   Row 3 → print 3 stars
//   ...
//   Row n → print n stars
// ============================================================

// ============================================================
// COMMON FUNCTION: printTriangle(rows)
// ============================================================
// Input  → rows: number (how many rows to print)
// Output → void (just prints to console, returns nothing)

function printTriangle(rows: number): void {

  console.log(`\n📌 Triangle Pattern for rows = ${rows}:`);
  console.log("--------------------");

  // Outer loop: controls which ROW we are on (1 to rows)
  for (let row = 1; row <= rows; row++) {

    // Inner loop: prints '*' exactly 'row' times for each row
    // Example: row=1 → 1 star, row=3 → 3 stars
    let stars: string = "";

    for (let col = 1; col <= row; col++) {
      stars += "*"; // Keep adding one star per column
    }

    // Print the stars for this row
    console.log(stars);
  }

  console.log("--------------------");
}

// ============================================================
// RUN WITH DIFFERENT INPUTS
// ============================================================

console.log("============================================================");
console.log("          ASSIGNMENT 9 - STAR TRIANGLE PATTERN");
console.log("============================================================");

// Assignment requirement: rows = 5
printTriangle(5);

// Bonus: test with other sizes
printTriangle(3);
printTriangle(7);

console.log("============================================================");
