import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, Input, Button, SpanError } from './style';

const Home = () => {
	const [ user, setUser ] = useState('');
	const [ error, setError ] = useState(false);
	const history = useHistory();

	const handleRepos = async () => {
		const response = axios.get(`https:/api.github.com/users/${user}/repos`)
		response
			.then(result => {
				const repositories = result.data.map(repo => {
					return { id:repo.id, name: repo.name }
				});
				localStorage.setItem('repositories', JSON.stringify(repositories));
				setError(false);
				history.push('/repositories');
			})
			.catch(err => setError(true));
	};

	return (
		<Container>
			<div>
				<Input
					type='text'
					placeholder='Usuário'
					value={user}
					onChange={e => setUser(e.target.value)}
				/>
				<Button
					type='button'
					onClick={handleRepos}
				>
				Pesquisar
				</Button>
			</div>
			{ error ? <SpanError>Ocorreu um erro. Tente Novamente.</SpanError> : '' }
		</Container>
	);

};

export default Home;
