import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Background = styled.div`
	background-image: url('../../about.jpeg');
	background-position: center;
	background-size: cover;
	min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Alegreya', serif;
  }
`;

const Checkout = styled.div`
	min-height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	height: 60rem;
	width: 75rem;
`;

const Input = styled.input`
	width: 100%;
	padding: 8px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
`;

const Button = styled.button`
	background-color: #9d938c;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		background-color: #82796f;
	}
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

const Row = styled.div`
	display: flex;
	width: 100%;
`;

const Column = styled.div`
	flex: 1;
	padding: 0 1rem;
`;

const SummaryLine = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const CartItem = ({ item }) => (
	<div>
		<img src={item.imgSrc} alt={item.name} width="50" height="50" />
		<span>{item.name}</span>
		<span>Quantity: {item.quantity}</span>
		<span>Price: ${item.price.toFixed(2)}</span>
	</div>
);

function CheckoutPage({ cartItems }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		address: '',
		city: '',
		zip: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		// Send the form data to your server or external API here
		console.log(formData);
		alert('Thank you for submitting the form!');
		setFormData({ name: '', email: '', address: '', city: '', zip: '' });
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const calculateSubtotal = () => {
		return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
	};

	const calculateTaxes = (subtotal) => {
		return subtotal * 0.08;
	};

	const calculateTotal = (subtotal, taxes) => {
		return subtotal + taxes;
	};

	const subtotal = calculateSubtotal();
	const taxes = calculateTaxes(subtotal);
	const total = calculateTotal(subtotal, taxes);

	return (
		<>
			<GlobalStyle />
			<Background>
				<Header centered />

				<Checkout>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Column>
								<SectionTitle>Product Summary</SectionTitle>
								<LineSeparator />
								{cartItems.map((item) =>
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
								)}
								<LineSeparator />
								<SummaryLine>
									<span>Subtotal:</span>
									<span>${subtotal.toFixed(2)}</span>
								</SummaryLine>

								<SummaryLine>
									<span>Shipping:</span>
									<span>Free</span>
								</SummaryLine>
								<SummaryLine>
									<span>Taxes:</span>
									<span>${taxes.toFixed(2)}</span>
								</SummaryLine>
								<LineSeparator />
								<SummaryLine>
									<span>Total:</span>
									<span>${total.toFixed(2)}</span>
								</SummaryLine>
							</Column>
							<Column>
								<SectionTitle>Contact Information</SectionTitle>
								<Input
									type="text"
									name="phoneNumber"
									placeholder="Phone Number"
									onChange={handleChange}
									required
								/>
								<Input
									type="email"
									name="email"
									value={formData.email}
									placeholder="Email"
									onChange={handleChange}
									required
								/>
								<SectionTitle>Shipping Address</SectionTitle>
								<Input
									type="text"
									name="firstName"
									placeholder="First Name"
									onChange={handleChange}
									required
								/>
								<Input
									type="text"
									name="lastName"
									placeholder="Last Name"
									onChange={handleChange}
									required
								/>
								<Input
									type="text"
									name="country"
									placeholder="Country"
									onChange={handleChange}
									required
								/>
								<Input
									type="text"
									name="addressLine1"
									placeholder="Address Line 1"
									onChange={handleChange}
									required
								/>
								<Input
									type="text"
									name="apartmentNumber"
									placeholder="Apartment Number"
									onChange={handleChange}
								/>
								<Input
									type="text"
									name="city"
									placeholder="City"
									onChange={handleChange}
									required
								/>
								<Input
									type="text"
									name="state"
									placeholder="State"
									onChange={handleChange}
									required
								/>
								<Input
									type="text"
									name="zipcode"
									placeholder="Zip Code"
									onChange={handleChange}
									required
								/>
								<SectionTitle>Payment Details</SectionTitle>

								<Input
									type="text"
									name="cardNumber"
									placeholder="Card Number"
									onChange={handleChange}
									required
								/>
								<Input
									type="text"
									name="cardExpiry"
									placeholder="Card Expiry"
									onChange={handleChange}
									required
								/>
								<Input
									type="text"
									name="cardCVV"
									placeholder="Card CVV"
									onChange={handleChange}
									required
								/>
								<Button type="submit">Submit</Button>
							</Column>
						</Row>
					</Form>
				</Checkout>
				<Footer />
			</Background>
		</>
	);
}

export default CheckoutPage;
