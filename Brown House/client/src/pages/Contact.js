import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Background = styled.div`
	background-color: #9d938c;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
`;

const Construction = styled.div`
	background-color: #9d938c;
	min-height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Alegreya', serif;
	overflow: hidden;
  }
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: space-evenly;
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

const TextArea = styled.textarea`
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

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		// send the form data to your server or external API here
		console.log(formData);
		alert('Thank you for submitting the form!');
		setFormData({ name: '', email: '', message: '' });
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
				<Construction>
					<Form onSubmit={handleSubmit}>
						<SectionTitle>Contact Us!</SectionTitle>
						<Input
							type="text"
							name="name"
							value={formData.name}
							placeholder="Name"
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
						<TextArea
							name="message"
							value={formData.message}
							placeholder="Message"
							rows="5"
							onChange={handleChange}
							required
						/>
						<Button type="submit">Submit</Button>
					</Form>
				</Construction>
			</Background>
			<Footer />
		</>
	);
}

export default Contact;
