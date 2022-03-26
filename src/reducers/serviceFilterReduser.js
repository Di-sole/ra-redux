const initialState = {
	filterValue: ''
};

function serviceFilterReduser(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case 'SET_FILTER':
			return {...state, filterValue: payload}
		case 'RESET_FILTER':
			return {...state, filterValue: ''}
		default:
			return state;
	}
}

export default serviceFilterReduser;