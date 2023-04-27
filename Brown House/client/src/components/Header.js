import React from 'react';
import styled from 'styled-components';
// import ShoppingCart from './ShoppingCart';

const HeaderContainer = styled.div`
	display: flex;
	justify-content: ${({ centered }) =>
		centered
			? 'center'
			: 'flex-start'}; // Conditionally apply styles based on the "centered" prop
	padding: 1rem;
`;

const Title = styled.h1`
	font-size: 70px;
	font: Alereya;
	font-weight: bold;
	display: inline;
	margin: 0;
`;

const ShoppingCartContainer = styled.div`
	position: absolute;
	right: 1rem;
	top: 1rem;
`;

const Brown = styled.span`
	color: #613d1a;
	margin-right: 0.25em;
`;

const Header = ({ centered }) => {
	return (
		<HeaderContainer centered={centered}>
			<Title>
				<Brown>Brown</Brown> House
			</Title>
			{/* <ShoppingCartContainer>
				<ShoppingCart cartItems />
			</ShoppingCartContainer> */}
		</HeaderContainer>
	);
};

export default Header;
