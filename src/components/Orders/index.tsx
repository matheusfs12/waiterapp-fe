import { useEffect, useState } from 'react';

import { Container } from './styles';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { api } from '../../utils/api';
import socketIo from 'socket.io-client';

export function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        console.count('fetching orders...');

        api.get('/orders').then(response => {
            setOrders(response.data);
        }).catch(error => {
            console.log(error);
        });

        const socket = socketIo(import.meta.env.VITE_SOCKET_HOST, {
            transports: ['websocket'],
        });

        socket.on('orders@new', (order) => {
            setOrders(prev => prev.concat(order));
        });
    }, []);

    // memoize
    const waitingOrders = orders.filter(order => order.status === 'WAITING');
    const inProductionOrders = orders.filter(order => order.status === 'IN_PRODUCTION');
    const readyOrders = orders.filter(order => order.status === 'DONE');

    function handleCancelOrder(orderId: string) {
        setOrders(prev => prev.filter(order => order._id !== orderId));
    }

    function handleChangeOrderStatus(orderId: string, status: Order['status']) {
        setOrders(prev => prev.map(order => {
            if (order._id === orderId) {
                return {
                    ...order,
                    status,
                };
            }

            return order;
        }));
    }

    return (
        <Container>
            <OrdersBoard
                icon='🕑'
                title='Fila de espera'
                orders={waitingOrders}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleChangeOrderStatus}
            />

            <OrdersBoard
                icon='👨🏻‍🍳'
                title='Em preparo'
                orders={inProductionOrders}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleChangeOrderStatus}
            />

            <OrdersBoard
                icon='✅'
                title='Pronto'
                orders={readyOrders}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleChangeOrderStatus}
            />
        </Container>
    );
}
