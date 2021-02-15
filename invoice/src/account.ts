import { Customer } from "./customer";

export class Account {
    private id: number;
    private customer: Customer;
    private balance: number = 0.0;

    constructor(id: number, customer: Customer, balance: number) {
        this.id = id;
        this.customer = customer;
        this.balance = balance
    }
    get getId(): number {
        return this.id;
    }
    get getCustomer(): Customer {
        return this.customer;
    }
    get getBalance(): number {
        return this.balance;
    }
    set setBalance(value: number) {
        this.balance = value;
    }
    getCustomerName(): string {
        return this.customer.getName;
    }
    deposit(amount: number): Account {
        this.balance += amount;
        return new Account(this.id, this.customer, this.balance);
    }
    withdraw(amount: number): Account {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
        }
        else {
            console.log("Amount withdrawn exceeds the current balance!");
        }
        return new Account(this.id, this.customer, this.balance);
    }
    toString(): string {
        // return "name(ID) balance=$XXX.XX"; //lohi(48) balance=$50000.00
        return this.customer.getName + "(" + this.id + ") balance=$" + this.balance;
    }










}








