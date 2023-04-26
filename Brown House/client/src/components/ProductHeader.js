import React from 'react';
import styled from 'styled-components';
import ShoppingCart from './ShoppingCart';

const HeaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 15vh; // You can adjust this value to your preference
	padding: 1rem;
`;

const ShoppingCartContainer = styled.div`
	position: absolute;
	right: 1rem;
	top: 1rem;
`;

const Title = styled.h1`
	font-size: 100px;
	font-family: 'Waterfall', cursive;
	font-weight: bold;
	display: inline;
	margin: 0;
`;

const Brown = styled.span`
	color: #613d1a;
	margin-right: 0.25em;
`;

const ProductHeader = ({ cartItems, product }) => {
	return (
		<HeaderContainer>
			<Title>{product.productName}</Title>
			<ShoppingCartContainer>
				<ShoppingCart cartItems={cartItems} />
			</ShoppingCartContainer>
		</HeaderContainer>
	);
};

export default ProductHeader;
