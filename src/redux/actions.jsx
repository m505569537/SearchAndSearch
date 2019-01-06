import axios from 'axios'
import {SEAR_REPOS, SEAR_USERS}  from './action-types.jsx'


//key表示在输入框输入的搜索关键字
const serRepo = (arr) => ({type: SEAR_REPOS, data: arr});

const serUser = (arr) => ({type: SEAR_USERS, data: arr});


export const getRepo = (key) => {
	return dispatch => {
		const Url = `https://api.github.com/search/repositories?q=${key}&sort=stars`;
		axios.get(Url)
			.then(res => {
				const result = res.data.items.map((item, index) => ({name:item.name, url:item.html_url}));
				dispatch(serRepo(result));
			}).catch(error => {
				console.log(error);
			})
	}
}

export const getUser = (key) => {
	return dispatch => {
		const Url = `https://api.github.com/search/users?q=${key}`;
		axios.get(Url)
			.then(res => {
				console.log(res)
				const result = res.data.items.map((item, index) => ({name:item.login, url:item.html_url}));
				dispatch(serUser(result));
			}).catch(error => {
				console.log(error);
			})
	}
}