const redux = require('redux');

const initialState = {
	counter: 122
}

const rootReducer = (state = initialState, action) => {
	console.log('in reducer', action);

	if (action.type === 'INC_COUNTER') {
		return {...state, counter: state.counter + 1}
	}

	if (action.type === 'ADD_COUNTER') {
		return {...state, counter: state.counter + action.value}
	}

	return state;
}

const store = redux.createStore(rootReducer);

store.subscribe(() => {
	console.log('[Subscription]', store.getState());
});

console.log('Initial state:', store.getState());

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log('After:', store.getState());
