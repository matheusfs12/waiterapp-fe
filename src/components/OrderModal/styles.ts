import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4.5px);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalBody = styled.div`
    background: #fff;

    width: 48rem;
    border-radius: 0.8rem;
    padding: 3.2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
            font-size: 2.4rem;
        }

        button {
            line-height: 0;
            border: 0;
            background: transparent;
        }
    }

    .status-container {
        margin-top: 3.2rem;

        small {
            font-size: 1.4rem;
            opacity: 0.8;
        }

        div {
            display: flex;
            gap: 0.8rem;
            align-items: center;
        }
    }
`;

export const OrderDetails = styled.div`
    margin-top: 3.2rem;

    > strong {
        font-size: 1.4rem;
        font-weight: 500;
        opacity: 0.8;
    }

    .order-items {
        margin-top: 1.6rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        .item {
            display: flex;

            img {
                width: 4.8rem;
                height: 4rem;
                object-fit: cover;
                border-radius: 0.6rem;
            }

            .quantity {
                font-size: 1.4rem;
                color: #666;

                display: block;
                min-width: 2rem;
                margin-left: 1.2rem;
            }

            .product-details {
                margin-left: 0.4rem;

                strong {
                    display: block;
                    margin-bottom: 0.4rem;
                }

                span {
                    font-size: 1.4rem;
                    color: #666;
                }
            }
        }
    }

    .total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2.4rem;

        span {
            font-size: 1.4rem;
            font-weight: 500;
            opacity: 0.8;
        }
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-top: 3.2rem;

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .primary {
        background: #333333;
        border: 0;
        border-radius: 4.8rem;
        color: #fff;
        padding: 1.2rem 2.4rem;

        :hover {
            background: #222222;
        }

        transition: background 0.2s;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
    }

    .secondary {
        padding: 1.4rem 2.4rem;
        color: #D73035;
        border: 0.1rem solid transparent;
        font-weight: bold;
        background: transparent;
        border-radius: 4.8rem;

        :hover {
            border: 0.1rem solid #D73035;
        }
    }
`;
