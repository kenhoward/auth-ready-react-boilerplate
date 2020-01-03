import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './layout/Navbar';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Switch>
					{/* Update Routes */}
					{/* <Route exact path='/' component={COMPONENT_NAME} />
					<Route path='/streams/new' component={ANOTHER_COMPONENT_NAME} /> */}
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
