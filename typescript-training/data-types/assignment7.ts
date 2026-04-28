// ============================================================
// ASSIGNMENT 7 - STRING OPERATIONS
// ============================================================
// Sentence: "Java programming is fun and challenging"
//
// Tasks:
//   1. Count total number of words
//   2a. Reverse order of words (Program 1)
//   2b. Complete reverse of the entire sentence (Program 2)
//   3. Capitalize first character of each word
// ============================================================

const sentence: string = "Java programming is fun and challenging";

console.log("============================================================");
console.log("            ASSIGNMENT 7 - STRING OPERATIONS");
console.log("============================================================");
console.log(`Original Sentence: "${sentence}"`);
console.log("============================================================");

// ============================================================
// TASK 1: Count total number of words
// ============================================================
// .split(" ") splits the sentence by spaces into an array of words
// Example: "Java programming is fun" → ["Java", "programming", "is", "fun"]
// .length gives the count of that array

const wordsArray: string[] = sentence.split(" ");
const totalWords: number = wordsArray.length;

console.log(`\n📌 TASK 1 - Total Word Count`);
console.log(`   Total number of words: ${totalWords}`);

// ============================================================
// TASK 2a: PROGRAM 1 — Reverse order of words
// ============================================================
// Each word stays intact, but their ORDER is reversed
// "Java programming is fun and challenging"
//  →  "challenging and fun is programming Java"
//
// .reverse() reverses the array in place
// .join(" ") joins the array back into a single string with spaces

const reversedWordsArray: string[] = [...wordsArray]; // copy the array using spread operator
// WHY copy? Because .reverse() modifies the original array.
// We don't want to disturb 'wordsArray' for later tasks.

reversedWordsArray.reverse(); // Reverse the order of words

const reversedWordOrder: string = reversedWordsArray.join(" ");

console.log(`\n📌 TASK 2a - PROGRAM 1: Words in Reverse Order`);
console.log(`   Original : "${sentence}"`);
console.log(`   Reversed : "${reversedWordOrder}"`);

// ============================================================
// TASK 2b: PROGRAM 2 — Complete reverse of entire sentence
// ============================================================
// Every character in the string is reversed
// "Java programming is fun and challenging"
//  → "gnignel lahc dna nuf si gnimmargorp avaJ"
//
// Steps:
//   1. .split("")   → splits into individual characters → ["J","a","v","a"," ",...]
//   2. .reverse()   → reverses the characters array
//   3. .join("")    → joins back into a string (no space between chars)

const completeReverse: string = sentence.split("").reverse().join("");

console.log(`\n📌 TASK 2b - PROGRAM 2: Complete Character Reverse`);
console.log(`   Original : "${sentence}"`);
console.log(`   Reversed : "${completeReverse}"`);

// ============================================================
// TASK 3: Capitalize first character of each word
// ============================================================
// Input:  "Java programming is fun and challenging"
// Output: "Java Programming Is Fun And Challenging"
//
// Steps for each word:
//   word[0].toUpperCase()  → takes first character and makes it uppercase
//   word.slice(1)          → takes the rest of the word from index 1 onwards
//   Combine: "p" + "rogramming" → "Programming"

const capitalizedWords: string[] = wordsArray.map((word: string) => {
  // .map() loops through each word and transforms it
  // word[0]       → first character (e.g., "p")
  // .toUpperCase()→ makes it uppercase (e.g., "P")
  // word.slice(1) → rest of the word from index 1 (e.g., "rogramming")
  return word[0]!.toUpperCase() + word.slice(1);
});

const capitalizedSentence: string = capitalizedWords.join(" ");

console.log(`\n📌 TASK 3 - Capitalize First Character of Each Word`);
console.log(`   Original    : "${sentence}"`);
console.log(`   Capitalized : "${capitalizedSentence}"`);

console.log("\n============================================================");
