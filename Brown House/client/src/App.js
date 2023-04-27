import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/HomeFooter';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';
import LookBook from './pages/LookBook';
import Random from './pages/Random';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
	const [cartItems, setCartItems] = useState([]);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/news" element={<News />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/random" element={<Random />} />
				<Route
					path="/product-page/:productName"
					element={
						<ProductPage cartItems={cartItems} setCartItems={setCartItems} />
					}
				/>
				<Route path="/spring-summer-2023" element={<Catalog />} />
				<Route
					path="/checkout"
					element={<CheckoutPage cartItems={cartItems} />}
				/>
				<Route path="/spring-summer-2023-lookbook" element={<LookBook />} />
			</Routes>
		</Router>
	);
}

export default App;
