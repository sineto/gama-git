import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repositories from './pages/Repositories';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/repositories' component={Repositories} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
