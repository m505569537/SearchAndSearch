import React from 'react';
import PropTypes from 'prop-types';

import List from '../components/list.jsx'

export default class SearUser extends React.Component {

	//期望data中每个对象只包含name和url两个属性
	static propTypes = {
		data: PropTypes.array.isRequired,
		getUser: PropTypes.func.isRequired,
	};

	handleClick = () => {
		const key = this.input.value;
		if(key) {
			this.props.getUser(key);
		}
	}

	render() {
		const {data} = this.props;
		return (
			<div className='col-md'>
				<div className='col-md-4'>
					<input type="text" ref={input => this.input = input} />
					<button onClick={this.handleClick}>搜索用户</button>
				</div>
				<List data={data} />
			</div>
		);
	}
}
