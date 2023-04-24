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
			<NavLink to="/news">news</NavLink>
			<NavLink href="/spring-summer-2023">spring/summer 2023</NavLink>
			<NavLink href="/spring-summer-2023-lookbook">
				spring/summer 2023 Lookbook
			</NavLink>
			<NavLink to="/shop">shop</NavLink>
			<NavLink href="/random">random</NavLink>
			<NavLink to="/about">about</NavLink>
			<NavLink to="/contact">contact</NavLink>
			<NavLink href="/mailing-list">mailing list</NavLink>
		</NavigationContainer>
	);
};

export default Navigation;
