import { Account } from "./account";
import { Customer } from "./customer";
import { Invoice } from "./invoice";

class Invoicegeneration {
    customer: Customer;
    account: Account;
    invoice: Invoice;

    constructor() {


        let btn = document.getElementById("generatebill");
        btn.addEventListener('click', (x) => {
            this.customer = this.getCustomerDetails();
            let invoiceid = (document.getElementById("invoice-id") as HTMLInputElement).value;
            let amount = (document.getElementById("Amount") as HTMLInputElement).value;

            this.invoice = new Invoice(+invoiceid, this.customer, +amount);
            (document.getElementById("available-balance") as HTMLInputElement).innerText = (this.account.getBalance - this.invoice.getAmountAfterDiscount()).toString();
            document.getElementById("bill-amount").innerText=this.invoice.getAmount.toString();
            document.getElementById("bill-discount").innerText=this.customer.getDiscount.toString();
            document.getElementById("bill-total").innerText=this.invoice.getAmountAfterDiscount().toString();
        });

        document.getElementById('deposit').addEventListener('click', (x => {
            this.customer = this.getCustomerDetails();
            let accountid = (document.getElementById("account-id") as HTMLInputElement).value;
            let balance = (document.getElementById("Balance") as HTMLInputElement).value;
            this.account = new Account(+accountid, this.customer, +balance);
            (document.getElementById("available-balance") as HTMLInputElement).innerText = this.account?.getBalance.toString();
        }))



    }

    getCustomerDetails(): Customer {
        let name = (document.getElementById("name") as HTMLInputElement).value;
        let customerid = (document.getElementById("id") as HTMLInputElement).value;
        let mobile = (document.getElementById("mobile") as HTMLInputElement).value;
        let discount = (document.getElementById("dis") as HTMLInputElement).value;
        return new Customer(+customerid, name, +discount, +mobile);
    }
}

new Invoicegeneration();