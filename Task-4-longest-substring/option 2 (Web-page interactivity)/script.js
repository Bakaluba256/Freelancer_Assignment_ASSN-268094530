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
  
  // Function to handle user input and display the result
  function calculateLongestSubstring() {
    const inputString = document.getElementById('inputString').value.trim();
    if (!inputString) {
      alert('Please enter a valid string.');
      return;
    }
  
    const result = lengthOfLongestSubstring(inputString);
    document.getElementById('result').textContent = `Longest substring length: ${result}`;
  }