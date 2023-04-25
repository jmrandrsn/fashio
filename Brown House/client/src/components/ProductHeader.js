import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 15vh; // You can adjust this value to your preference
	padding: 1rem;
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

const ProductHeader = () => {
	return (
		<HeaderContainer>
			<Title>Only Lamp</Title>
		</HeaderContainer>
	);
};

export default ProductHeader;
