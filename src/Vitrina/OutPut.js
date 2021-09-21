import Footer from './components/Footer';
import Header from './components/Header'
import Shop from './components/Shop';
import { ContextProvider } from './context';


function OutPut() {
    return (
        <div>
            <Header />
            <ContextProvider>
            <Shop />
            </ContextProvider>
            <Footer />
        </div>
    );
}

export default OutPut;