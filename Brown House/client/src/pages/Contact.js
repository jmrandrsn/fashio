import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Background = styled.div`
	background-color: #9d938c;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
`;

const Construction = styled.h1`
	background-color: #9d938c;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Alegreya', serif;
  }
`;

const NewsContainer = styled.div``;

function Contact() {
	return (
		<>
			<GlobalStyle />
			<Background>
				<Header centered />
				<Construction>
					<h1> Contact Under Construction Mother Fucker</h1>
				</Construction>
			</Background>
			<Footer />
		</>
	);
}

export default Contact;
