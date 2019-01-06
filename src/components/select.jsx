import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';

import RepoAction from '../containers/repo-action.jsx'
import UserAction from '../containers/user-action.jsx'

export default class Select extends React.Component {

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md'>
						<NavLink to='/repos'>Repos</NavLink>
					</div>
					<div className='col-md'>
						<NavLink to='/users'>Users</NavLink>
					</div>
				</div>
				<div className='row'>
					<Switch>
						<Route path='/repos' component={RepoAction} />
						<Route path='/users' component={UserAction} />
					</Switch>
				</div>
			</div>
		);
	}
}
