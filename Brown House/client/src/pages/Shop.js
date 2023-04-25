import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlackSweater from '../media/blacksweater.jpeg';
import Hoodie from '../media/hoodie.jpeg';
import Jacket from '../media/jacket.jpeg';
import Lamp from '../media/lamp.jpeg';

const Background = styled.div`
	background-color: #9d938c;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Alegreya', serif;
	overflow: hidden;
	margin: 0;
    padding: 0;
  }
`;

const MainContent = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProductsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	padding: 20px;
`;

const Product = styled.div`
	background-color: white;
	height: 300px;
	width: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 5px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	padding: 1rem;
`;

const ProductImage = styled.img`
	height: 200px;
	width: 150px;
	object-fit: cover;
	border-radius: 5px;
`;

const ProductLink = styled(Link)`
	text-decoration: none;
`;

const ProductName = styled.p`
	margin: 10px 0;
`;

const ProductPrice = styled.p`
	font-weight: bold;
`;

function Shop() {
	return (
		<>
			<GlobalStyle />
			<Background>
				<Header centered />
				<MainContent>
					<ProductsContainer>
						<Product>
							<ProductLink to="/product-page">
								<ProductImage src={BlackSweater} />
							</ProductLink>

							<ProductName>Black Sweater</ProductName>
							<ProductPrice>$49.99</ProductPrice>
						</Product>
						<Product>
							<ProductLink to="/product-page">
								<ProductImage src={Hoodie} />
							</ProductLink>

							<ProductName>Dope Hoodie</ProductName>
							<ProductPrice>$60</ProductPrice>
						</Product>
						<Product>
							<ProductLink to="/product-page">
								<ProductImage src={Jacket} />
							</ProductLink>

							<ProductName>Letterman</ProductName>
							<ProductPrice>$150</ProductPrice>
						</Product>
						<Product>
							<ProductLink to="/product-page">
								<ProductImage src={Lamp} />
							</ProductLink>

							<ProductName>Only Lamp</ProductName>
							<ProductPrice>$79.99</ProductPrice>
						</Product>
						{/* Add more products here */}
					</ProductsContainer>
				</MainContent>
				<Footer />
			</Background>
		</>
	);
}

export default Shop;
