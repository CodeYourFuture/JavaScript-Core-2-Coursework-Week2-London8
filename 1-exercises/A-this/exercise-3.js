/*

  Complete the "deposit" and "withdraw" methods on the "bankAccount"
  object. Each method will take 1 parameter, "amount", which will either be
  added to or subtracted from the "currentAmount".

*/

let bankAccount = {
  currentAmount: 100,
  deposit: function (amount) {
    this.currentAmount = this.currentAmount + amount;
    // console.log(
    //   `Expected Result: ${this.currentAmount}. Actual result: ${this.currentAmount}`
    // );
  },
  withdraw: function (amount) {
    this.currentAmount = this.currentAmount - amount;
    // console.log(
    //   `Expected Result: ${this.currentAmount}. Actual result: ${this.currentAmount}`
    // );
  },
};

// DO NOT EDIT BELOW THIS LINE
bankAccount.deposit(50);
console.log(
  `Expected Result: 150. Actual result: ${bankAccount.currentAmount}`
);

bankAccount.withdraw(25);
console.log(
  `Expected Result: 125. Actual result: ${bankAccount.currentAmount}`
);
