class Account {
  constructor(balance, interest) {
    this.balance = balance;
    this.interest = interest;
  }

  displayBalance() {
    return this.balance
  }

  adjustBalance(n) { // positive for a deposit, negative for a withdrawl
    this.balance += n;
  }

  setInterest(n) {
    this.interest = n;
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

// const savings = new Account(1000, .1)

// savings.compoundDay(5)

// console.log(savings.displayBalance());

class Debt {
  constructor(balance, interest) {
    this.balance = balance;
    this.interest = interest;
  }

  displayBalance() {
    return this.balance
  }

  payment(n) { // can simply do payment with a negative n if you want to increase debt
    this.balance -= n;
  }

  setInterest(n) {
    this.interest = n;
  }

  untilPaidOff(payment, currentBalance = this.balance, i = 1) { // Currently only works in one-month increments
    // console.log(payment, currentBalance, i);
    if (currentBalance <= payment) {
      return [i, currentBalance]
    }
    let newBalance = currentBalance * ((1 + this.interest) ** (1 / 12))
    newBalance -= payment;
    // console.log(currentBalance, newBalance, payment);
    return newBalance > currentBalance ? [-1, newBalance - currentBalance] : this.untilPaidOff(payment, newBalance, i + 1)
    // return currentBalance <= payment ? [i, currentBalance]
    //   : (() => {
    //   let newBalance = currentBalance * ((1 + this.interest) ** (n / 12))
    //   newBalance -= payment;
    //   return this.untilPaidOff(payment, newBalance, i + 1)})
  }
}

// const fridge = new Debt(100, .75)

// let [months, finalPayment] = fridge.untilPaidOff(4.78)

// months < 1 ? console.log(`You must increase your payments by more than ${finalPayment} to reduce the principle.`) : console.log(`You will pay off the fridge in ${months} payments with a final payment of ${finalPayment}.`);
