// const countDown = (num) => {
//   if (num === 0) {
//     return num;
//   } else {
//     console.log(num);
//     return countDown(num - 1);
//   }
// };

// console.log(countDown(10));
const coinCounter = (coins) => {
  return (amountCounter = (amount, arr, n) => {
    if (isNaN(amount)) {
      return;
    }
    if (amount <= 0) {
      return arr;
    } else if (amount >= coins[n]) {
      arr[n][1]++;
      return amountCounter(amount - coins[n], arr, n);
    } else {
      n++;
      return amountCounter(amount, arr, n);
    }
  });
};

const arr = [
  [25, "quarter", 0],
  [10, "dime", 0],
  [5, "nickle", 0],
  [1, "penny", 0],
];

const usCoins = coinCounter([25, 10, 5, 1]);
console.log(usCoins(34, arr, 0));

// function coinCounter(amount) {
//   return function(coins) {
//     return
//   }
// }

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

// function welcome(salutation) {
//   return function(yourName) {
//     return `${salutation}! Nice to meet you, ${yourName}!`
//   }
// }

// const heyThere = welcome("Hey there");

// heyThere("Joe")
// // "Hey there! Nice to meet you, Joe!"
