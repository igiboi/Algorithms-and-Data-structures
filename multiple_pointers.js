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

// starting two pointers on the left side 
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(var j=1; j<arr.length; j++) {
        if(arr[j] !== arr[i]) {
          i++;
          arr[i] = arr[j]
        }
    }    
    return i+1;  
}