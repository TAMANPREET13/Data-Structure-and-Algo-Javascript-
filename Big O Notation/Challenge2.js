// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    //O(N)
    let x = i + 1; //O(N)
    let y = i + 2; //O(N)
    let z = i + 3; //O(N)
  }
  for (let j = 0; j < input; j++) {
    //0(N)
    let p = j * 2; //0(N)
    let q = j * 2; //O(N)
  }
  let whoAmI = "I don't know"; //O(1)
}

// 4 + 7(N) === O(N)
