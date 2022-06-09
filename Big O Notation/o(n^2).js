// Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

function printPairsOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    //o(n)
    for (let j = 0; j < arr.length; j++) {
      //o(n)
      console.log(arr[i], arr[j]);
    }
  }
}

printPairsOfArray(boxes);

// O(n * n) = O(n^2)
