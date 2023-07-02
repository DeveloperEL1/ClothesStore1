interface Order {
    id: number;
    date: Date;
    userId: number;
    items: OrderItem[];
    totalPrice: number;
    shippingAddress: Address;
    paymentStatus: PaymentStatus;
}
interface OrderItem {
    itemId: number;
    quantity: number;
}

interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

enum PaymentStatus {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed",
}

export { Order, OrderItem, Address, PaymentStatus };
