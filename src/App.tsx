import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';
import { Orders } from './components/Orders';
import { ToastContainer } from 'react-toastify';

export function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Orders />
            <ToastContainer position="bottom-right" />
        </>
    );
}
