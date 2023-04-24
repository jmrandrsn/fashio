import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const NewsContainer = styled.div`
	background-color: #9d938c;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function News() {
	return (
		<>
			<NewsContainer>
				<h1>News</h1>
			</NewsContainer>
			<Footer />
		</>
	);
}

export default News;
