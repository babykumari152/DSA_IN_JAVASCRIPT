// Remember, all submissions are being checked for plagiarism.
// Your recruiter will be informed in case suspicious activity is detected.

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // Implement your solution here
    const charCount = new Map();
    let left = 0;
    let right = 0;
    let smallestSubString = '';

    while(right < S.length) {
      const currentChar = S[right];
      charCount.set(currentChar,(charCount.get(currentChar)||0)+1)
      while(charCount.get(currentChar) >1 ){
          const leftChar = S[left];
          charCount.set(leftChar,charCount.get(leftChar) - 1);
          left++;
      }
    
      if(charCount.size == right - left +1 && (smallestSubString == '' || right-left+1 <smallestSubString.length)){
          smallestSubString = S.substring(left,right+1);
          console.log()
      }
      right++;
    }

    return smallestSubString.length;
}
console.log(solution('zyzyzyz'))