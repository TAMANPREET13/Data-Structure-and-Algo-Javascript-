const boxes = [4, 8, 12, 16];

const compressFunction = (boxes) => {
  console.log(boxes[0]); //O(1)
  console.log(boxes[1]); //O(1)
};

compressFunction(boxes); // O(2) rounding to O(1) - Constant Time
