// const countDown = (num) => {
//   if (num === 0) {
//     return num;
//   } else {
//     console.log(num);
//     return countDown(num - 1);
//   }
// };

// console.log(countDown(10));

const coinCounter = (amount, coins, arr, n) => {
  if (isNaN(amount)) {
    return;
  }
  if (amount <= 0) {
    return arr;
  } else if (amount >= coins[0]) {
    arr[n][1]++;
    return coinCounter(amount - coins[0], coins, arr, n);
  } else {
    n++;
    return coinCounter(amount, coins.slice(1), arr, n);
  }
};

const arr = [
  ["quarter", 1],
  ["dime", 0],
  ["nickle", 1],
  ["penny", 4],
];

console.log(coinCounter(34, [25, 10, 5, 1], arr, 0));

// function change(amount, coins) {
//   if (amount == 0) {
//     return 0;
//   } else if (coins.length == 0 && amount > 0) {
//     return Infinity;
//   } else if (coins[0] > amount) {
//     return change(amount, coins.slice(1));
//   } else {
//     var loseIt = 0 + change(amount, coins.slice(1));
//     var useIt = 1 + change(amount - coins[0], coins);
//     return Math.min(loseIt, useIt);
//   }
// }

// console.log(change(101, [1, 5, 10, 25]));
// 6
