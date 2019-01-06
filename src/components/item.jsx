import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    };

    render() {
    	const {index, name, url} = this.props;
        return (
            <li>第{index+1}名：<a href={url}>{name}</a></li>
        );
    }
}

export default Item;
