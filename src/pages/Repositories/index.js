import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, LinkItem, List, ListItem } from './style';

const Repositories = () => {
	const [ repositories, setRepositories ] = useState([]);
	const history = useHistory();

	useEffect(() => {
		let data = localStorage.getItem('repositories');

		if (data === null) {
			history.push('/');
		}

		data = JSON.parse(data);
		setRepositories(data);
		localStorage.clear();
	}, [history]);

	return (
		<Container>
			<LinkItem to='/'>Voltar</LinkItem>
			<h1>Repositories</h1>
			<List>
				{
					repositories.map(repository => {
						return <ListItem key={repository.id}>{ repository.name }</ListItem>
					})
				}
			</List>
			<LinkItem to='/'>Voltar</LinkItem>
		</Container>
	);
};

export default Repositories;
