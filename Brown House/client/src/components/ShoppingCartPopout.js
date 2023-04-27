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
	display: flex;
	flex-direction: column;
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

const Row = styled.div`
	display: flex;
	width: 100%;
`;

const Column = styled.div`
	flex: 1;
	padding: 0 1rem;
`;

const SectionTitle = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;

const LineSeparator = styled.hr`
	width: 100%;
	border: 1px solid #ccc;
	margin-bottom: 1rem;
`;

const SummaryLine = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const ShoppingCartPopout = ({ cartItems, togglePopout }) => {
	return (
		<>
			<ShoppingCartContainer>
				<PopoutContent>
					<Row>
						<Column>
							<SectionTitle>Shopping Cart</SectionTitle>
							<LineSeparator />
							{cartItems.length === 0 ? (
								<SummaryLine>
									<h2> No items in shopping cart </h2>
								</SummaryLine>
							) : (
								cartItems.map((item) =>
									Array.from({ length: item.quantity }, (_, index) => (
										<SummaryLine key={`${item.id}-${index}`}>
											<img
												src={item.imgSrc}
												alt={item.name}
												width="50"
												height="50"
											/>
											<span>{item.name}</span>
											<span>Quantity: 1</span>
											<span>Price: ${item.price.toFixed(2)}</span>
										</SummaryLine>
									)),
								)
							)}
							<LineSeparator />
							<SummaryLine>
								<Button onClick={togglePopout}>Keep Shopping</Button>
								<Link to="/checkout">
									<Button onClick={togglePopout}>Checkout Now</Button>
								</Link>
							</SummaryLine>
						</Column>
					</Row>
				</PopoutContent>
			</ShoppingCartContainer>
		</>
	);
};

export default ShoppingCartPopout;
