import { Board, OrdersContainer } from './styles';

import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { api } from '../../utils/api';
import { toast } from 'react-toastify';
import { useState } from 'react';

export interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];
    onCancelOrder: (orderId: string) => void;
    onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleOpenModal(order: Order) {
        setSelectedOrder(order);
        setIsModalVisible(true);
    }

    function handleCloseModal() {
        setSelectedOrder(null);
        setIsModalVisible(false);
    }

    async function handleCancelOrder() {
        setIsLoading(true);

        try {
            await api.delete(`/orders/${selectedOrder?._id}`);

            toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado com sucesso!`);
        } catch (error) {
            toast.error('Ocorreu um erro ao cancelar o pedido, tente novamente mais tarde.');
            console.log(error);
        } finally {
            setIsLoading(false);
            onCancelOrder(selectedOrder?._id as string);
            setSelectedOrder(null);
            setIsModalVisible(false);
        }
    }

    async function handleChangeOrderStatus() {
        setIsLoading(true);

        try {
            const status = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

            await api.patch(`/orders/${selectedOrder?._id}`, {
                status,
            });

            toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);
            onChangeOrderStatus(selectedOrder?._id as string, status);
        } catch (error) {
            toast.error('Ocorreu um erro ao atualizar o pedido, tente novamente mais tarde.');
            console.log(error);
        } finally {
            setIsLoading(false);
            setSelectedOrder(null);
            setIsModalVisible(false);
        }
    }

    return (
        <Board>
            <OrderModal
                isOpen={isModalVisible}
                order={selectedOrder}
                onClose={handleCloseModal}
                onCancelOrder={handleCancelOrder}
                onChangeOrderStatus={handleChangeOrderStatus}
                isLoading={isLoading}
            />

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
