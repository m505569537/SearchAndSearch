import React from 'react';
import PropTypes from 'prop-types';

import List from '../components/list.jsx'

export default class SearRepo extends React.Component {
	//期望data中每个对象只包含name和url两个属性
	static propTypes = {
		data: PropTypes.array.isRequired,
		getRepo: PropTypes.func.isRequired,
	};

	handleClick = () => {
		const key = this.input.value;
		if(key){
			this.props.getRepo(key);
		}
	}

	render() {
		const {data} = this.props;
		return (
			<div className='container'>
			<div className='row'>
				<div className='col-md'>
					<input type="text" ref={input => this.input = input} />
					<button onClick={this.handleClick}>搜索库</button>
				</div>
				<List data={data} />
			</div>
			</div>
		);
	}
}