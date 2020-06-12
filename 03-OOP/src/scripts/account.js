export class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
        return this.balance;
    }

    withdraw(amount) {
        this.balance = this.balance - amount;
        return this.balance;
    }

    currentBalance() {
        return this.balance;
    }
}

// 130C 

export class AccountController {
    constructor() {
        this.acctArry = [];
    }

    addNewAcct(name, balance) {
        let newCust = new Account(name, balance);
        this.acctArry.push(newCust);
        return this.acctArry;
    }

    balanceOnAcct(name) {
        let index = this.acctArry.findIndex(acctLocate => acctLocate.name === name);
        if (index >= 0) {
            return this.acctArry[index].balance;
        }
        else { return false }

    }

    depositToAcct(name, amount) {
        let index = this.acctArry.findIndex(acctLocate => acctLocate.name === name);
        if (index >= 0) {
            return this.acctArry[index].deposit(amount);
        }
        else { return false }


    }

    withdrawFrAcct(name, amount) {
        let index = this.acctArry.findIndex(acctLocate => acctLocate.name === name);
        if (index >= 0) {
            return this.acctArry[index].withdraw(amount);
        }
        else { return false }

    }

    deleteAcct(name) {
        let index = this.acctArry.findIndex(acctLocate => acctLocate.name === name);
        if (index >= 0) {
            this.acctArry.splice(index, 1);
            return true
        }
        else { return false }

    }

    totalBalance() {
        let total = 0;
        let i
        for (i = 0; i < this.acctArry; i++) {
            total += Number(this.acctArry[i].balance);
        }
        return total;
    }

    largestAcctBal() {
        let largest = 0
        for (let i = 0; i < this.acctArry.length; i++) {
            let highbalance = this.acctArry[0].balance;
            let current = this.acctArry[i].balance;
            if (highbalance < current) {
                highbalance = current;
                largest = i;
            }
        }
        return largest;
    }

    smallestAcctBal() {
        let smallest = 0
        for (let i = 0; i < this.acctArry.length; i++) {
            let lowbalance = this.acctArry[0].balance;
            let current = this.acctArry[i].balance;
            if (lowbalance > current) {
                lowbalance = current;
                smallest = i;
            }
        }
        return smallest;

    }

}

// export default {Account , AccountController};









