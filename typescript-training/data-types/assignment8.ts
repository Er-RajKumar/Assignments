// ============================================================
// ASSIGNMENT 8 - SEARCH WORD OCCURRENCES IN A PARAGRAPH
// ============================================================
// Find all occurrences of the word "Java" in a paragraph
// and print:
//   1. Total number of occurrences
//   2. Index (position) of each occurrence
// ============================================================

const paragraph: string =
  "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

const searchWord: string = "Java";

console.log("============================================================");
console.log("       ASSIGNMENT 8 - WORD OCCURRENCE SEARCH");
console.log("============================================================");
console.log(`Paragraph   : "${paragraph}"`);
console.log(`Search Word : "${searchWord}"`);
console.log("============================================================");

// ============================================================
// FIND ALL OCCURRENCES USING A LOOP + indexOf()
// ============================================================
// .indexOf(word, startPosition) finds the NEXT occurrence of
// a word starting from 'startPosition'
// Returns -1 if the word is not found
//
// Strategy:
//   - Start searching from index 0
//   - Each time we find the word, record its index
//   - Then move startPosition forward (past the found word)
//   - Repeat until indexOf returns -1 (no more found)

const foundIndexes: number[] = []; // Array to store all found positions
let searchFrom: number = 0;        // Starting position for each search

// Loop until indexOf returns -1 (means no more occurrences)
while (true) {
  const foundAt: number = paragraph.indexOf(searchWord, searchFrom);

  if (foundAt === -1) {
    // No more occurrences found — stop the loop
    break;
  }

  // Found an occurrence → store the index
  foundIndexes.push(foundAt);

  // Move search start PAST this occurrence to find the next one
  // searchWord.length = 4 (for "Java"), so move forward by 4
  searchFrom = foundAt + searchWord.length;
}

// ============================================================
// PRINT RESULTS
// ============================================================
const totalOccurrences: number = foundIndexes.length;

console.log(`\n📌 Total Number of Occurrences : ${totalOccurrences}`);
console.log(`📌 Indexes of "${searchWord}":`);

for (let i = 0; i < foundIndexes.length; i++) {
  console.log(`   Occurrence ${i + 1} → Index: ${foundIndexes[i]!}`);
}

// Bonus: Verify by showing what text appears at each index
console.log(`\n📌 Verification (text at each found index):`);
for (let i = 0; i < foundIndexes.length; i++) {
  const idx = foundIndexes[i]!;
  // .substring(start, end) extracts a portion of the string
  const extracted = paragraph.substring(idx, idx + searchWord.length);
  console.log(`   Index ${idx} → "${extracted}"`);
}

console.log("============================================================");
