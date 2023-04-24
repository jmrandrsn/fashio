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

const Paragraph = styled.p`
	font-size: 20px;
	color: white; // Make the text color white
	position: absolute; // Use absolute positioning
	top: 50%; // Center vertically
	left: 50%; // Center horizontally
	transform: translate(
		-50%,
		-50%
	); // Adjust position for the element's dimensions
	width: 20%; // Set the width of the paragraph
	text-align: center; // Center the text within the paragraph
`;

function About() {
	return (
		<>
			<GlobalStyle />
			<Background>
				<Header centered />
				<Paragraph>
					Launched in 2023 at the height of an AI revolution, Brown House is a
					one man art house dedicated to fostering all things humanity and
					celebrating the wonderment of being organic. Our products are crafted
					with our fellow humans in mind and are (by design) completely fucking
					random. In this vein we hope to fulfill our mission of inspiring
					creativity, entrepreneurship, mindfulness, and a deeper appreciation
					for the human experience unburdened by the constant noise and evolving
					of technology.{' '}
				</Paragraph>
				<Footer />
			</Background>
		</>
	);
}

export default About;
