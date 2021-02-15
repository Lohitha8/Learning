export class Customer {
    private Id: number;
    private name: string;
    private discount: number;
    private mobile: number;

    constructor(Id: number, name: string, discount: number, mobile: number) {
        this.Id = Id;
        this.name = name;
        this.discount = discount;
        this.mobile = mobile;
    }
    get getId(): number {
        return this.Id;
    }
    get getName(): string {
        return this.name;
    }
    get getDiscount(): number {
        return this.discount;
    }
    set setDiscount(value: number) {
        this.discount = value;
    }
    toString(): string {
        return this.name + "(" + this.Id + ")";
    }

}
