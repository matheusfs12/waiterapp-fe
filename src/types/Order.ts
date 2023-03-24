export interface Order {
    _id: string;
    table: string;
    status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
    products: OrderItem[];
}

interface OrderItem {
    _id: string;
    quantity: number;
    product: Product;
}

interface Product {
    name: string;
    imagePath: string;
    price: number;
}
