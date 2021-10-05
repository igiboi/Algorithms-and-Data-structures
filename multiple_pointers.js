// Brute force, time complexity - O(N^2), Space Complexity - O(1)
function sumZero(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; i < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Refactored, time complexity - O(N), space complexity - O(1)
function sumZero(arr) {
  let left = 0; 
  let right = arr.length - 1; 
  while (left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left],  arr[right]];   
    } else if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
