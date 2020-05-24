import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	width: 580px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const LinkItem = styled(Link)`
	text-decoration: none;
	color: black;
	align-self: flex-start;

	&:hover {
		text-decoration: underline;
	}
`;

export const List = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

export const ListItem = styled.li`
	color: white;
	background: black;
	margin 0.35em 0;
	padding: 0.65em 1em;
`;
