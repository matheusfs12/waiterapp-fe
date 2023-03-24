import styled from 'styled-components';

export const Container = styled.header`
    background: #D73035;
    display: flex;
    justify-content: center;
    height: 19.8rem;
    align-items: center;
    padding: 0 3.2rem;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 121.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-details {
        h1 {
            color: #fff;
            font-size: 3.2rem;
        }

        h2 {
            color: #fff;
            font-weight: 400;
            opacity: 0.9;
            margin-top: 0.8rem;
        }
    }
`;
