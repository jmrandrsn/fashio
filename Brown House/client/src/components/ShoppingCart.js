import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = styled.div`
	position: relative;
	font-size: 24px;
	cursor: pointer;
`;

const CartCounter = styled.span`
	position: absolute;
	top: -8px;
	right: -8px;
	background-color: red;
	color: white;
	font-size: 14px;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

// Shopping Cart should be clicked and small popout with cart items should be available.
//Seperate from the checkout page
const ShoppingCart = ({ cartItems }) => {
	return (
		<CartIcon>
			<FaShoppingCart />
			{cartItems.length > 0 && <CartCounter>{cartItems.length}</CartCounter>}
		</CartIcon>
	);
};

export default ShoppingCart;
