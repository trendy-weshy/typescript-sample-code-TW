interface BankCustomers {
    name: string;
    age: number;
}
abstract class BankAccount{
    // protected balance: number = 0;
    private holder: BankCustomers;
    protected readonly accountLimit: number = 10;
    private readonly gencode: number = 8910; // a default/general pin code for the BankAccount
    constructor( name: string, age: number, pin_code: number ) {
        // authenticate the customer
        if (pin_code===this.gencode) {
           this.holder = {
                name,
                age
            }; 
        }
        else {
            // throw error if pin does not match
            this.errorException(`could not validate your pin please try-again later. Thank you.`);
        }   
    }
    protected errorException(error: any): never {
        throw new Error(error);
    }

    // abstract methods to ensure the various accounts can deposit and withdraw
    abstract deposit(amount: number): number;
    abstract withdraw(amount: number): number;
    abstract getBal(): void;
    // #End of abstract classes

    /**
     * all BankAccount class getters
    */
    get holdersName(): string{
        return this.holder.name;
    }
    get holdersAge(): number{
        return this.holder.age;
    }
    /**
     * End of class getters
    */
}
// implement types of accounts;
class SavingsAccount extends BankAccount{
    private balance: number = 0;
    private readonly withdrawLimit: number;
    constructor( name: string, age: number, pin_code: number ) {
        super(name,age,pin_code);
        console.log(`Welcome: ${this.holdersName} to Safi Banks Savings Account.`);
        this.withdrawLimit = this.accountLimit + 2500;
    }
    deposit(amount: number): number{
        if (amount < 0) {
            this.errorException('Amount entered is below zero hence no deposit is made to account');
            return this.balance;
        }
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount: number): number{
        if (amount < 0) {
            this.errorException('Amount entered is below zero hence no withdrawal is made to account');
            return this.balance;
        }
        let newBal: number = this.balance - amount;
        if (newBal < this.withdrawLimit) {
            this.errorException('Amount entered is below the withdrawal limit hence cannot withdraw');
            return this.balance;
        }
        this.balance = newBal;
        return this.balance;
    }
    getBal() {
        console.log(`Your current account balance: ${this.balance}`);
    }
}

class CurrentAccount extends BankAccount{
    private balance: number = 0;
    constructor( name: string, age: number, pin_code: number ) {
        super(name,age,pin_code);
        console.log(`Welcome: ${this.holdersName} to Safi Banks Current Accounts.`);
    }
    deposit(amount: number): number{
        if (amount < 0) {
            this.errorException('Amount entered is below zero hence no deposit is made to account');
            return this.balance;
        }
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount: number): number{
        if (amount < 0) {
            this.errorException('Amount entered is below zero hence no withdrawal is made to account');
            return this.balance;
        }
        let newBal: number = this.balance - amount;
        if (newBal < this.accountLimit) {
            this.errorException('Amount entered is below the withdrawal limit hence cannot withdraw');
            return this.balance;
        }
        this.balance = newBal;
        return this.balance;
    }
    getBal() {
        console.log(`Your current account balance: ${this.balance}`);
    }
}

let balanceReporter = (action: string, bal: number): void => console.log(`You ${action}: ${bal}`);
/**
 * All bank account instances and activites
*/

// SAVINGS ACCOUNT
let johnSavingsAccount = new SavingsAccount('John Waweru', 12, 8910);
/**
 * all john's saving account activities
*/
balanceReporter('deposited', johnSavingsAccount.deposit(3499));
balanceReporter('deposited', johnSavingsAccount.deposit(16409));
johnSavingsAccount.getBal();
balanceReporter('deposited', johnSavingsAccount.withdraw(4909));
balanceReporter('deposited', johnSavingsAccount.withdraw(409));
johnSavingsAccount.getBal();
johnSavingsAccount.deposit(1490);
johnSavingsAccount.getBal();

/**
 * end of john's savings account activities
*/

// CURRENT ACCCOUNT
let emmaCurrentAccount = new CurrentAccount('Emma Watson', 10, 8910);
/**
 * all emma's current account activities
*/
balanceReporter('deposited', emmaCurrentAccount.deposit(3499));
balanceReporter('deposited', emmaCurrentAccount.deposit(40909));
emmaCurrentAccount.getBal();
balanceReporter('deposited', emmaCurrentAccount.withdraw(39090));
balanceReporter('deposited', emmaCurrentAccount.withdraw(400));
emmaCurrentAccount.getBal();
emmaCurrentAccount.deposit(1490);
emmaCurrentAccount.getBal();
/**
 * end of emma's current account activities
*/