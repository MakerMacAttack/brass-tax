class Account {
  constructor(balance, interest) {
    this.balance = balance;
    this.interest = interest;
  }

  displayBalance() {
    return this.balance
  }

  compoundDay(n) {
    this.balance *= ((1 + this.interest) ** (n / 365))
  }

  compoundWeek(n) {
    this.balance *= ((1 + this.interest) ** (n / 52))
  }

  compoundMonth(n) {
    this.balance *= ((1 + this.interest) ** (n / 12))
  }

  compoundYear(n) {
    this.balance *= ((1 + this.interest) ** n)
  }
}

const savings = new Account(1000, .1)

savings.compoundDay(100)

console.log(savings.displayBalance());
