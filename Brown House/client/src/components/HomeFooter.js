import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: transparent;
	padding: 1rem;
`;

const FooterLink = styled.a`
	text-decoration: none;
	color: white;
	font-size: 12px;
	font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
	margin: 0 0.5rem;
`;

const HomeFooter = () => {
	return (
		<FooterContainer>
			<FooterLink href="/terms">Terms</FooterLink>
			<FooterLink href="/privacy">Privacy</FooterLink>
			<FooterLink href="/faq">F.A.Q.</FooterLink>
			<FooterLink href="/accessibility">Accessibility</FooterLink>
		</FooterContainer>
	);
};

export default HomeFooter;
