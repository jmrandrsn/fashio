import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ShoppingCartContainer = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PopoutContent = styled.div`
	background-color: #fff;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	max-width: 500px;
	width: 80%;
`;

const Button = styled.button`
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

const ShoppingCartPopout = ({ cartItems, togglePopout }) => {
	return (
		<>
			<ShoppingCartContainer>
				<PopoutContent>
					{cartItems.map((item) =>
						Array.from({ length: item.quantity }, (_, index) => (
							<div key={`${item.id}-${index}`}>
								<img src={item.imgSrc} alt={item.name} width="50" height="50" />
								<span>{item.name}</span>
								<span>Quantity: 1</span>
								<span>Price: ${item.price.toFixed(2)}</span>
							</div>
						)),
					)}
					<Button onClick={togglePopout}>Keep Shopping</Button>
					<Link to="/checkout">
						<Button onClick={togglePopout}>Checkout Now</Button>
					</Link>
				</PopoutContent>
			</ShoppingCartContainer>
		</>
	);
};

export default ShoppingCartPopout;
