//import React from 'react';
import {connect} from 'react-redux'
import {getRepo} from '../redux/actions.jsx'
import SearRepo from '../views/sear-repo.jsx'

const RepoAction = connect(
	state => ({data: state}),
	{getRepo}
)(SearRepo)

export default RepoAction