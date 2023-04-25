import React from 'react';
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
	margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
	line-height: 1.5;
	margin-bottom: 1rem;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Alegreya', serif;
	overflow: hidden;
	margin: 0;
    padding: 0;
  }
`;

const Brown = styled.span`
	color: #613d1a;
	margin-right: 0.25em;
`;

const ProductPage = () => {
	return (
		<>
			<GlobalStyle />
			<Background>
				<ProductHeader />
				<MainContent>
					<ProductContainer>
						<ProductDetailsContainer>
							<ProductName>
								<Brown>Brown</Brown>House
							</ProductName>
							<ProductDescription>
								A standing lamp for the DIY / get it on your own type of person.
								Looks nice in living rooms, bedrooms, and make-shift studios.
							</ProductDescription>
							<ProductPrice>$79.99</ProductPrice>

							{/* Add size and quantity selection, Add to Cart button, etc. */}
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
