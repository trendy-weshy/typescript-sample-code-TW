var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BankAccount = (function () {
    function BankAccount(name, age, pin_code) {
        this.accountLimit = 10;
        this.gencode = 8910;
        if (pin_code === this.gencode) {
            this.holder = {
                name: name,
                age: age
            };
        }
        else {
            this.errorException("could not validate your pin please try-again later. Thank you.");
        }
    }
    BankAccount.prototype.errorException = function (error) {
        throw new Error(error);
    };
    Object.defineProperty(BankAccount.prototype, "holdersName", {
        get: function () {
            return this.holder.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "holdersAge", {
        get: function () {
            return this.holder.age;
        },
        enumerable: true,
        configurable: true
    });
    return BankAccount;
}());
var SavingsAccount = (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(name, age, pin_code) {
        var _this = _super.call(this, name, age, pin_code) || this;
        _this.balance = 0;
        console.log("Welcome: " + _this.holdersName + " to Safi Banks Savings Account.");
        _this.withdrawLimit = _this.accountLimit + 2500;
        return _this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        if (amount < 0) {
            this.errorException('Amount entered is below zero hence no deposit is made to account');
            return this.balance;
        }
        this.balance += amount;
        return this.balance;
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        if (amount < 0) {
            this.errorException('Amount entered is below zero hence no withdrawal is made to account');
            return this.balance;
        }
        var newBal = this.balance - amount;
        if (newBal < this.withdrawLimit) {
            this.errorException('Amount entered is below the withdrawal limit hence cannot withdraw');
            return this.balance;
        }
        this.balance = newBal;
        return this.balance;
    };
    SavingsAccount.prototype.getBal = function () {
        console.log("Your current account balance: " + this.balance);
    };
    return SavingsAccount;
}(BankAccount));
var CurrentAccount = (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(name, age, pin_code) {
        var _this = _super.call(this, name, age, pin_code) || this;
        _this.balance = 0;
        console.log("Welcome: " + _this.holdersName + " to Safi Banks Current Accounts.");
        return _this;
    }
    CurrentAccount.prototype.deposit = function (amount) {
        if (amount < 0) {
            this.errorException('Amount entered is below zero hence no deposit is made to account');
            return this.balance;
        }
        this.balance += amount;
        return this.balance;
    };
    CurrentAccount.prototype.withdraw = function (amount) {
        if (amount < 0) {
            this.errorException('Amount entered is below zero hence no withdrawal is made to account');
            return this.balance;
        }
        var newBal = this.balance - amount;
        if (newBal < this.accountLimit) {
            this.errorException('Amount entered is below the withdrawal limit hence cannot withdraw');
            return this.balance;
        }
        this.balance = newBal;
        return this.balance;
    };
    CurrentAccount.prototype.getBal = function () {
        console.log("Your current account balance: " + this.balance);
    };
    return CurrentAccount;
}(BankAccount));
var balanceReporter = function (action, bal) { return console.log("You " + action + ": " + bal); };
var johnSavingsAccount = new SavingsAccount('John Waweru', 12, 8910);
balanceReporter('deposited', johnSavingsAccount.deposit(3499));
balanceReporter('deposited', johnSavingsAccount.deposit(16409));
johnSavingsAccount.getBal();
balanceReporter('deposited', johnSavingsAccount.withdraw(4909));
balanceReporter('deposited', johnSavingsAccount.withdraw(409));
johnSavingsAccount.getBal();
johnSavingsAccount.deposit(1490);
johnSavingsAccount.getBal();
var emmaCurrentAccount = new CurrentAccount('Emma Watson', 10, 0910);
balanceReporter('deposited', emmaCurrentAccount.deposit(3499));
balanceReporter('deposited', emmaCurrentAccount.deposit(40909));
emmaCurrentAccount.getBal();
balanceReporter('deposited', emmaCurrentAccount.withdraw(39090));
balanceReporter('deposited', emmaCurrentAccount.withdraw(400));
emmaCurrentAccount.getBal();
emmaCurrentAccount.deposit(1490);
emmaCurrentAccount.getBal();
//# sourceMappingURL=bank.js.map