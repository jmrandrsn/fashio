import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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

function CheckoutPage() {
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

	return (
		<>
			<GlobalStyle />
			<Background>
				<Header centered />
				<Checkout>
					<Form onSubmit={handleSubmit}>
						<Input
							type="text"
							name="name"
							value={formData.name}
							placeholder="Full Name"
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
						<Input
							type="text"
							name="address"
							value={formData.address}
							placeholder="Address"
							onChange={handleChange}
							required
						/>
						<Input
							type="text"
							name="city"
							value={formData.city}
							placeholder="City"
							onChange={handleChange}
							required
						/>
						<Input
							type="text"
							name="zip"
							value={formData.zip}
							placeholder="ZIP Code"
							onChange={handleChange}
							required
						/>
						<Button type="submit">Submit</Button>
					</Form>
				</Checkout>
				<Footer />
			</Background>
		</>
	);
}

export default CheckoutPage;
