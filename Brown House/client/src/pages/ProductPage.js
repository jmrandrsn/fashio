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
	margin-bottom: 4rem;
	margin-left: 3.5rem;
`;

const ProductDescription = styled.p`
	line-height: 1.5;
	margin-bottom: 0.25rem;
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

const QuantitySelector = styled.div`
	width: 100px;
	height: 50px;
	font-size: 16px;
	text-align: center;
	border: 1px solid #ccc;
	border-radius: 5px;
	display: flex;
	align-items: center;
`;

const QuantityButton = styled.button`
	background-color: #613d1a;
	color: white;
	font-size: 18px;
	padding: 5px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #4b2f16;
	}
`;

const QuantityValue = styled.span`
	font-size: 20px;
	width: 40px;
	height: 25px;
	margin: 0 10px;
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

const CheckoutContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ProductSpecs = styled.div`
	display: flex;
	justify-content: centered;
	flex-direction: column;
`;

const SpecName = styled.span`
	font-weight: bold;
`;

const SpecValue = styled.span`
	margin-left: 0.5rem;
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

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
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

							<ProductSpecs>
								<div>
									<SpecName>Dimensions:</SpecName>
									<SpecValue>58" H x 10" W x 10" D</SpecValue>
								</div>
								<div>
									<SpecName>Weight:</SpecName>
									<SpecValue>8 lbs</SpecValue>
								</div>
								<div>
									<SpecName>Material:</SpecName>
									<SpecValue>Wood, Metal, Fabric</SpecValue>
								</div>
								<div>
									<SpecName>Color:</SpecName>
									<SpecValue>Dark Brown</SpecValue>
								</div>
								<div>
									<SpecName>Bulb Type:</SpecName>
									<SpecValue>LED</SpecValue>
								</div>
								<div>
									<SpecName>Wattage:</SpecName>
									<SpecValue>9 watts</SpecValue>
								</div>
								<div>
									<SpecName>Lumens:</SpecName>
									<SpecValue>800 lm</SpecValue>
								</div>
								<div>
									<SpecName>Switch Type:</SpecName>
									<SpecValue>Rotary</SpecValue>
								</div>
								<div>
									<SpecName>Power Source:</SpecName>
									<SpecValue>Plug-in</SpecValue>
								</div>
							</ProductSpecs>
						</ProductDetailsContainer>
						<ProductImageContainer>
							<ProductImage src={Lamp} alt="Product" />
							<CheckoutContainer>
								<AddToCartButton onClick={addToCart}>
									Add to Cart
								</AddToCartButton>

								<QuantitySelector>
									<QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
									<QuantityValue>{quantity}</QuantityValue>
									<QuantityButton onClick={increaseQuantity}>+</QuantityButton>
								</QuantitySelector>

								<BuyNowButton onClick={handleBuyNow}>Buy Now</BuyNowButton>
							</CheckoutContainer>
						</ProductImageContainer>
					</ProductContainer>
				</MainContent>
				<Footer blackLinks />
			</Background>
		</>
	);
};

export default ProductPage;
