class Account {
  constructor(accountHolderName, balance = 0) {
    this.accountNumber = Account.generateAccountNumber();

    this.accountHolderName = accountHolderName;

    this.balance = balance;
  }
  static generateAccountNumber() {
    return Math.floor(Math.random() * 1000000000000);
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;

      console.log(`Deposited ${amount} `);
    } else {
      console.log("Invalid deposit amount.");
    }
  }
  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} `);
    } else {
      console.log("Insufficient balance");
    }
  }
  getAccountDetails() {
    // console.log(`Account ${this.accountNumber}`);

    console.log(`Account Holder: ${this.accountHolderName}`);
    console.log(`Balance: ${this.balance}`);
  }
}
class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.accounts = [];
  }
  createAccount(accountHolderName) {
    const account = new Account(accountHolderName);
    this.accounts.push(account);
    console.log(`Account ${account.accountNumber}`);
  }
  totalBankBalance() {
    let total = 0;

    this.accounts.forEach((account) => {
      total += account.balance;
    });

    console.log(`Total Bank Balance: ${total}`);
  }
  getAllAccounts() {
    // console.log(`Accounts at ${this.bankName}:`);
    this.accounts.forEach((account) => {
      account.getAccountDetails();
    });
  }
}

const myBank = new Bank("bank");
myBank.createAccount("Monu");
myBank.createAccount("RaviRaj");

const myaccount = myBank.accounts[0];
myaccount.deposit(5000);
myaccount.withdraw(500);

myaccount.getAccountDetails();

myBank.getAllAccounts();
myBank.totalBankBalance();
