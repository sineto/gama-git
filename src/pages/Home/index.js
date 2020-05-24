import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
		<>
			<div>
				<input
					type='text'
					placeholder='Usuário'
					value={user}
					onChange={e => setUser(e.target.value)}
				/>
				<button
					type='button'
					onClick={handleRepos}
				>
				Pesquisar
				</button>
			</div>
			{ error ? <span>Ocorreu um erro. Tente Novamente.</span> : '' }
		</>
	);
};

export default Home;
