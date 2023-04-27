import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaReddit } from 'react-icons/fa';

const NavigationContainer = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 5rem;
	margin-left: 2rem;
`;

const NavLink = styled(Link)`
	font-size: 15px;
	text-decoration: none;
	color: white;
	margin-bottom: 0.5rem;
`;

const IconContainer = styled.div`
	display: flex;
	margin-top: 1rem;
	font-size: 1.5rem;
	justify-content: space-evenly;
	> * {
		margin-right: 0.5rem; /* add margin to the right of each icon */
	}
`;

const Font = styled.div``;

const Navigation = () => {
	return (
		<NavigationContainer>
			<NavLink to="/news">news</NavLink>
			<NavLink to="/spring-summer-2023">spring/summer 2023</NavLink>
			<NavLink to="/spring-summer-2023-lookbook">
				spring/summer 2023 lookbook
			</NavLink>
			<NavLink to="/shop">shop</NavLink>
			<NavLink to="/random">random</NavLink>

			<NavLink to="/contact">contact</NavLink>

			<NavLink to="/about">about</NavLink>
			<NavLink href="/mailing-list">mailing list</NavLink>
			<IconContainer>
				<a href="https://www.instagram.com/">
					<FaInstagram style={{ color: '#000000' }} />
				</a>
				<a href="https://www.facebook.com/">
					<FaFacebook style={{ color: '#000000' }} />
				</a>
				<a href="https://twitter.com/">
					<FaTwitter style={{ color: '#000000' }} />
				</a>
				<a href="https://www.reddit.com/">
					<FaReddit style={{ color: '#000000' }} />
				</a>
			</IconContainer>
		</NavigationContainer>
	);
};

export default Navigation;
