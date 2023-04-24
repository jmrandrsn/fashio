import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Navigation = () => {
	return (
		<NavigationContainer>
			<NavLink to="/news">News</NavLink>
			<NavLink href="/spring-summer-2023">Spring/Summer 2023</NavLink>
			<NavLink href="/spring-summer-2023-lookbook">
				Spring/Summer 2023 Lookbook
			</NavLink>
			<NavLink to="/shop">Shop</NavLink>
			<NavLink href="/random">Random</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<NavLink href="/mailing-list">Mailing List</NavLink>
		</NavigationContainer>
	);
};

export default Navigation;
