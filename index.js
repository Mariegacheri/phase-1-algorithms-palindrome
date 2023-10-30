function isPalindrome(word) {
  // Write your algorithm here
  var j = word.length-1 
  for(var i=0; i<word.length/2; i++){ 
      if(word[i]!=word[j]){ 
          return false; 
      } 
      j--; 
  } 
  return true;
}

/* 
  Add your pseudocode here
  Function isPalindrome(word):
    j = Length of word - 1
    For i = 0 to (Length of word / 2):
        If word[i] is not equal to word[j]:
            Return False
        End If
        Decrement j by 1
    End For
    Return True
  End Function
*/

/*
  Add written explanation of your solution here
     1. Initialize j to the index of the last character in the string.
  2. Iterate from the beginning of the string (i starts at 0) to approximately the middle of the string (word.length / 2).
  3. Inside the loop, check if the character at position i does not match the character at position j. If they don't match, return False as it's not a palindrome.
  4. Decrement j by 1 to compare the next character from the end in the next iteration.
  5. If the loop completes without finding any mismatches, return True to indicate that the string is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
