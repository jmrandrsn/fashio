import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Background = styled.div`
	background-image: url('../../about(edited).jpeg');
	background-position: center;
	background-size: cover;
	min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Alegreya', serif;
  }
`;

function CheckoutPage() {
	return (
		<>
			<GlobalStyle />
			<Background>
				<Header centered />

				<Footer />
			</Background>
		</>
	);
}

export default CheckoutPage;
