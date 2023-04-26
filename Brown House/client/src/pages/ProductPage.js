import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ProductHeader from '../components/ProductHeader';
import Footer from '../components/Footer';
import findProductBySlug from '../utilities/findProductBySlug';
import { imageMapping } from '../utilities/imageMapping';

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

	width: 40rem;
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
	margin-bottom: 5rem;
	max-height: 1000px;
`;

const BrandName = styled.h1`
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
	border-radius: 5px;
	display: flex;
	align-items: center;
`;

const QuantityButton = styled.button`
	color: #613d1a;
	font-size: 18px;
	padding: 5px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #4b2f16;
		color: white;
	}
`;

const QuantityValue = styled.span`
	font-size: 20px;
	width: 40px;
	height: 25px;
	margin: 0 10px;
`;

const BuyNowButton = styled.button`
	background-color: #613d1a;
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

const ProductPage = (props) => {
	const [cartItems, setCartItems] = useState([]);
	const [quantity, setQuantity] = useState(1);
	const navigate = useNavigate();
	const { productName } = useParams();

	const product = findProductBySlug(productName);
	const addToCart = () => {
		const newCartItem = {
			id: product.id,
			name: product.productName,
			price: parseFloat(product.productPrice.slice(1)),
			imgSrc: product.imageSRC,
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
				<ProductHeader product={product} cartItems={cartItems} />
				<MainContent>
					<ProductContainer>
						<ProductDetailsContainer>
							<BrandName>
								<Brown>Brown</Brown>House
							</BrandName>
							<ProductDescription>
								{product.productDescription}
							</ProductDescription>
							<ProductPrice>{product.productPrice}</ProductPrice>
							<ProductSpecs>
								{product.productSpecs.map((spec) => (
									<div key={spec.specName}>
										<SpecName>{spec.specName}:</SpecName>
										<SpecValue>{spec.specValue}</SpecValue>
									</div>
								))}
							</ProductSpecs>
						</ProductDetailsContainer>
						<ProductImageContainer>
							<ProductImage
								src={imageMapping[product.imageSRC]}
								alt="Product"
							/>
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
