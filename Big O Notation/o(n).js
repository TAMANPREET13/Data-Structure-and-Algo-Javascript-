const nemo = ["nemo"];

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(1000).fill("nemo");

const findNemo = (arr) => {
  // let t1 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found Nemo!!!");
      break;
    }
  }
  // let t2 = performance.now();
  // console.log("Call tp find the Nemo took " + (t2 - t1) + " milliseconds");
};

findNemo(large); //o(n) --> Linear Time(as when the input increases the no of ouput increases linearly)
