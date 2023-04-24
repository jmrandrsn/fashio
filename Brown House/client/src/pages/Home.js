import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import HomeFooter from '../components/HomeFooter';

const Background = styled.div`
	background-image: url('../background.jpeg');
	background-position: center;
	background-size: cover;
	min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Alegreya', serif;
  }
`;

function Home() {
	return (
		<>
			<GlobalStyle />
			<Background>
				<Header />
				<Navigation />
				<HomeFooter />
			</Background>
		</>
	);
}

export default Home;
