import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	display: flex;
	justify-content: ${({ centered }) =>
		centered
			? 'center'
			: 'flex-start'}; // Conditionally apply styles based on the "centered" prop
	padding: 1rem;
`;

const Title = styled.h1`
	font-size: 70px;
	font: Alereya;
	font-weight: bold;
	display: inline;
	margin: 0;
`;

const Brown = styled.span`
	color: #613d1a;
	margin-right: 0.25em;
`;

const Header = ({ centered }) => {
	return (
		<HeaderContainer centered={centered}>
			<Title>
				<Brown>Brown</Brown> House
			</Title>
		</HeaderContainer>
	);
};

export default Header;
