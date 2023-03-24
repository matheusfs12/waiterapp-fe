import { Container } from './styles';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';

const orders: Order[] = [
    {
        _id: '6372e48cbcd195b0d3d0f7f3',
        table: '123',
        status: 'WAITING',
        products: [
            {
                product: {
                    name: 'Pizza quatro queijos',
                    imagePath: '1673490032707-quatro-queijos.png',
                    price: 40,
                },
                quantity: 3,
                _id: '6372e48cbcd195b0d3d0f7f4'
            },
            {
                product: {
                    name: 'Coca cola',
                    imagePath: '1673491001981-coca-cola.png',
                    price: 7,
                },
                quantity: 2,
                _id: '6372e48cbcd195b0d3d0f7f5'
            }
        ],
    }
];

export function Orders() {
    return (
        <Container>
            <OrdersBoard
                icon='🕑'
                title='Fila de espera'
                orders={orders}
            />

            <OrdersBoard
                icon='👨🏻‍🍳'
                title='Em preparo'
                orders={[]}
            />

            <OrdersBoard
                icon='✅'
                title='Pronto'
                orders={[]}
            />
        </Container>
    );
}
