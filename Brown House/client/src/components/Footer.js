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
	color: ${({ blackLinks }) => (blackLinks ? '#000' : 'white')};
	font-size: 12px;
	font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif;
	margin: 0 0.5rem;
	margin-right: ${({ extraSpacing }) => (extraSpacing ? '30rem' : '1rem')};
`;

const Footer = ({ blackLinks }) => {
	return (
		<FooterContainer>
			<FooterLink blackLinks={blackLinks} href="/">
				home
			</FooterLink>
			<FooterLink blackLinks={blackLinks} href="/shop" extraSpacing>
				shop
			</FooterLink>
			<FooterLink blackLinks={blackLinks} href="/terms">
				terms
			</FooterLink>
			<FooterLink blackLinks={blackLinks} href="/privacy">
				privacy
			</FooterLink>
			<FooterLink blackLinks={blackLinks} href="/faq">
				f.a.q.
			</FooterLink>
			<FooterLink blackLinks={blackLinks} href="/accessibility">
				accessibility
			</FooterLink>
		</FooterContainer>
	);
};

export default Footer;
