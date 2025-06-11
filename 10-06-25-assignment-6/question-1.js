//Q1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  //methods
  deposite(val) {
    if (val > 0) {
      this.balance += val;
    } else {
      console.log("amount must be greater than 0");
    }
  }

  withdraw(val) {
    if (val <= this.balance) {
      this.balance -= val;
    } else {
      console.log("Insufficient Amount :(");
    }
  }

  displayBalance() {
    console.log(`Balance of ${this.owner} : ${this.balance}`);
  }
}

let johnAccount = new BankAccount("John", 10000);
johnAccount.deposite(100);
johnAccount.withdraw(10000000);
johnAccount.displayBalance();
