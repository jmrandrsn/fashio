import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ProductHeader from '../components/ProductHeader';
import Footer from '../components/Footer';
import Hoodie from '../media/hoodie.jpeg';
import Lamp from '../media/lamp.jpeg';

const Background = styled.div`
	background-color: #f5f5f5;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

const MainContent = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	padding: 2rem;
`;

const ProductContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	max-width: 1200px;
`;

const ProductImageContainer = styled.div`
	flex: 1;
`;

const ProductDetailsContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const ProductImage = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 5px;
`;

const ProductName = styled.h1`
	margin-bottom: 0.5rem;
	font-size: 40px;
`;

const ProductPrice = styled.p`
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
	line-height: 1.5;
	margin-bottom: 1rem;
	max-width: 250px;
	font-size: 20px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Alegreya', serif;
	overflow: hidden;
	margin: 0;
    padding: 0;
  }
`;

const AddToCartButton = styled.button`
	background-color: #613d1a;
	color: white;
	font-size: 18px;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #4b2f16;
	}
`;

const Brown = styled.span`
	color: #613d1a;
	margin-right: 0.25em;
`;

const QuantitySelector = styled.input`
	width: 50px;
	height: 30px;
	font-size: 16px;
	text-align: center;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const BuyNowButton = styled.button`
	background-color: #4b2f16;
	color: white;
	font-size: 18px;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;
	margin-left: 1rem;

	&:hover {
		background-color: #3b2412;
	}
`;

const ProductPage = () => {
	const [cartItems, setCartItems] = useState([]);
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();

	const addToCart = () => {
		const newCartItem = {
			id: 'lamp', // Replace with a unique identifier for the product
			name: 'Brown House',
			price: 79.99,
			imgSrc: Lamp,
		};

		setCartItems([...cartItems, newCartItem]);
	};

	const handleBuyNow = () => {
		addToCart();
		navigate('/checkout');
	};

	return (
		<>
			<GlobalStyle />
			<Background>
				<ProductHeader cartItems={cartItems} />
				<MainContent>
					<ProductContainer>
						<ProductDetailsContainer>
							<ProductName>
								<Brown>Brown</Brown>House
							</ProductName>
							<ProductDescription>
								<p>
									A standing lamp for the DIY / get it on your own type of
									person. Looks nice in living rooms, bedrooms, and make-shift
									studios.
								</p>
							</ProductDescription>
							<ProductPrice>$79.99</ProductPrice>

							<div>
								<QuantitySelector
									type="number"
									min="1"
									value={quantity}
									onChange={(e) => setQuantity(e.target.value)}
								/>
								<AddToCartButton onClick={addToCart}>
									Add to Cart
								</AddToCartButton>
								<BuyNowButton onClick={handleBuyNow}>Buy Now</BuyNowButton>
							</div>
						</ProductDetailsContainer>
						<ProductImageContainer>
							<ProductImage src={Lamp} alt="Product" />
						</ProductImageContainer>
					</ProductContainer>
				</MainContent>
				<Footer blackLinks />
			</Background>
		</>
	);
};

export default ProductPage;
