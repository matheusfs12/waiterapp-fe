import { Board, OrdersContainer } from './styles';

import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { useState } from 'react';

export interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    function handleOpenModal(order: Order) {
        setSelectedOrder(order);
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setSelectedOrder(null);
        setIsModalOpen(false);
    }

    return (
        <Board>
            <OrderModal isOpen={isModalOpen} order={selectedOrder} onClose={handleCloseModal} />

            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>

            { orders.length > 0 && (
                <OrdersContainer>
                    {orders.map(order => (
                        <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
                            <strong>Mesa {order.table}</strong>
                            <span>{order.products.length} itens</span>
                        </button>
                    ))}
                </OrdersContainer>
            )}
        </Board>
    );
}
