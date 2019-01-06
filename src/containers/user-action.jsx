//import React from 'react';
import {connect} from 'react-redux'
import {getUser} from '../redux/actions.jsx'
import SearUser from '../views/sear-user.jsx'


const UserAction = connect(
	state => ({data:state}),
	{getUser}
)(SearUser)

export default UserAction;