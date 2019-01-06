


export const  getInfo = (state=[], action) => {
	switch(action.type){
		case 'SEAR_REPOS':
			return action.data
		case 'SEAR_USERS':
			return action.data
		default:
			return state;
	}
}