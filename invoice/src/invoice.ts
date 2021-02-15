import { Customer } from "./customer";

export class Invoice {
    private id: number;
    private customer: Customer;
    private amount: number;

    constructor(id: number, customer: Customer, amount: number) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    get getid(): number {
        return this.id;
    }
    get getCustomer(): Customer {
        return this.customer;
    }
    set setCustomer(value: Customer) {
        this.customer = value;
    }
    get getAmount(): number {
        return this.amount;
    }
    set setAmount(value: number) {
        this.amount = value;
    }
    getCustomerName(): string {
        return this.customer.getName;
    }
    getAmountAfterDiscount(): number {
        return this.amount - this.customer.getDiscount;
    }


}
