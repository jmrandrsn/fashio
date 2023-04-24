import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewsContainer = styled.div`
	min-height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
`;

const Background = styled.div`
	background-color: #9d938c;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Alegreya', serif;
	overflow: hidden;
  }
`;

function News() {
	return (
		<>
			<GlobalStyle />
			<Background>
				<Header centered />
				<NewsContainer>
					<h1>News</h1>
				</NewsContainer>
				<Footer />
			</Background>
		</>
	);
}

export default News;
