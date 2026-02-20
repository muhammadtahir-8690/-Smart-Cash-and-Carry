import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Onboarding />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
}

export default App;
