const readline = require('readline');

// Create an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to find the length of the longest substring without repeating characters
function lengthOfLongestSubstring(s) {
  const charIndexMap = new Map(); // Track character indices
  let maxLength = 0; // Store the maximum length found
  let left = 0; // Left pointer for the sliding window

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // If the character is already in the map and is within the current window
    if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= left) {
      left = charIndexMap.get(currentChar) + 1; // Move the left pointer
    }

    // Update the character's latest index
    charIndexMap.set(currentChar, right);

    // Calculate the current window size
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength; // Return the maximum length found
}

// Prompt the user for input
rl.question('Enter a string: ', (answer) => {
  const result = lengthOfLongestSubstring(answer.trim());
  console.log(`Longest substring length: ${result}`);
  rl.close();
});