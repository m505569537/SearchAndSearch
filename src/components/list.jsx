import React from 'react';
import PropTypes from 'prop-types'

import Item from './item.jsx'

export default class List extends React.Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
	};

	render() {
		const {data} = this.props;
		return (
			<div className='col-md'>
				<ul>
					{data.map((data, index) => <Item key={index} index={index} name={data.name} url={data.url} />)}
				</ul>
			</div>
		);
	}
}
