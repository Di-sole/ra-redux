import {createStore, combineReducers} from 'redux';
import serviceFormReduser from '../reducers/serviceFormReduser';
import serviceFilterReduser from '../reducers/serviceFilterReduser';
import serviceListReducer from '../reducers/serviceListReducer';

const reducer = combineReducers({
	serviceForm: serviceFormReduser,
	serviceFilter: serviceFilterReduser,
	serviceList: serviceListReducer
});

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && 
	window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;