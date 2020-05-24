import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
		<>
			<h1>Repositories</h1>
			<ul>
				{
					repositories.map(repository => {
						return <li key={repository.id}>{ repository.name }</li>
					})
				}
			</ul>
		</>
	);
};

export default Repositories;
