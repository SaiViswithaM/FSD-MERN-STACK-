class BankAccount {
    balance: number = 1000;

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }

    displayBalance() {
        console.log("Balance:", this.balance);
    }
}

let b = new BankAccount();

b.deposit(500);
b.withdraw(200);
b.displayBalance();