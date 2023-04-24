import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/HomeFooter';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/news" element={<News />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
