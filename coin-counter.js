// const countDown = (num) => {
//   if (num === 0) {
//     return num;
//   } else {
//     console.log(num);
//     return countDown(num - 1);
//   }
// };

// console.log(countDown(10));

const coinCounter = (amount, quarter, dime, nickle, penny, arr) => {
  if (isNaN(amount)) {
    return;
  }
  if (amount <= 0) {
    console.log(`array ${arr}`);
    return amount;
  } else if (amount >= quarter) {
    arr[0][1]++;
    return coinCounter(amount - quarter, quarter, dime, nickle, penny, arr);
  } else if (amount >= dime) {
    arr[1][1]++;
    return coinCounter(amount - dime, quarter, dime, nickle, penny, arr);
  } else if (amount >= nickle) {
    arr[2][1]++;
    return coinCounter(amount - nickle, quarter, dime, nickle, penny, arr);
  } else {
    arr[3][1]++;
    return coinCounter(amount - penny, quarter, dime, nickle, penny, arr);
  }
};

const arr = [
  ["quarter", 0],
  ["dime", 0],
  ["nickle", 0],
  ["penny", 0],
];

console.log(coinCounter(199, 25, 10, 5, 1, arr));
