//Customer
class Customer {
    private name: string
    private address: string

    constructor(name: string, address: string) {
        this.name = name
        this.address = address
    }
}
//Payment
abstract class Payment {
    private amount: number

    constructor(amount: number) {
        this.amount = amount
    }

}
//Order
class Order {
    private date: string
    private status: string
    private customer: Customer
    //ทำภายหลัง
    private payment: Payment = new Cash(0, 0);
    private orderDetails: OrderDetail[] =[];

constructor(date: string, status: string, customer: Customer, payment: Payment){
    this.date = date
    this.status = status
    this.customer = customer
    this.payment = payment
}
    public addOrderDetails(orderDetail: OrderDetail): void {
    this.orderDetails.push(orderDetail)
}
    public setPayment(payment: Payment): void {
    this.payment = payment
}
}
//Item
class Item {
    private shippingWeight: number
    private description: string

    constructor(shippingWeight: number, description: string) {
        this.shippingWeight = shippingWeight
        this.description = description
    }
    public getPriceForQuantity(): number {
        return 0
    }
    public getTax(): number {
        return 0
    }
    public inStock(): number {
        return 0
    }
}
//OrderDetail
class OrderDetail {
    private quantity: number
    private taxStatus: string

    constructor(quantity: number, taxStatus: string) {
        this.quantity = quantity
        this.taxStatus = taxStatus
    }
    public clacSubTotal(): number {
        return 0
    }
    public calcWeight(): number {
        return 0
    }
    public calcTax(): string {
        return "HelloTax"
    }
}
//cash
class Cash  extends Payment{
    private cashTendered: number

    constructor(amount: number, cashTendered: number) {
        super(amount);
        this.cashTendered = cashTendered
    }
}
//Check
class Check extends Payment {
    private name: string
    private bankID: string

    constructor(amount: number, name: string, bankID: string) {
        super(amount);
        this.name = name
        this.bankID = bankID
    }
    public authorized(): boolean {
        return true
    }
}
//credit
class Credit extends Payment {
    private number: string
    private type: string
    private expDate: string

    constructor(amount: number, number: string, type: string, expDate: string) {
        super(amount);
        this.number = number
        this.type = type
        this.expDate = expDate
    }
    public authorized(): boolean {
        return true
    }
}
