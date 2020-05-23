import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
	const [ user, setUser ] = useState('');
	const [ error, setError ] = useState(false);

	const handleRepos = async () => {
		const response = axios.get(`https:/api.github.com/users/${user}/repos`)
		response
			.then(result => {
				setError(false);
				console.log(result.data);
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
