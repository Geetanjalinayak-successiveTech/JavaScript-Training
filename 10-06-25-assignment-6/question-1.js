//Q1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  //methods
  deposite(val) {
    this.balance += val;
    return this.balance;
  }

  withdraw(val) {
    this.balance -= val;
    return this.balance;
  }

  displayBalance() {
    console.log(`Balance of ${this.owner} : ${this.balance}`);
  }
}

let johnAccount = new BankAccount("John", 10000);

console.log(johnAccount.deposite(100));
console.log(johnAccount.withdraw(100));
johnAccount.displayBalance();
