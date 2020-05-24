import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Input = styled.input`
	border: 2px solid #e2e2e2;
	border-right: none;
	border-radius: 0.45em 0 0 0.45em;
	padding: 0.65em 1em;
	outline: none;

	&:focus {
		border-color: black;
	}
`;

export const Button = styled.button`
	text-transform: uppercase;
	border: 2px solid black;
	border-radius: 0 0.45em 0.45em 0;
	background: transparent;
	padding: 0.65em 1em;
	cursor: pointer;
	outline: none;

	&:hover {
		color: white;
		background: black;
	}
`;

export const SpanError = styled.span`
	font-size: 0.83em;
	color: white;
	background: #C41F1F;
	border-radius: 0.65em;
	margin: 1em;
	padding: 25px;
	display: block;
`;
