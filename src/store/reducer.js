import {
	ADD,
	DECREMENT,
	FETCH_COUNTER_FAILURE,
	FETCH_COUNTER_REQUEST,
	FETCH_COUNTER_SUCCESS,
	INCREMENT,
	SUBTRACT,
	PUT_COUNTER
} from "./action";

const initialState = {
	counter: 123,
	loading: true,
	error: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {...state, counter: state.counter + 1};
		case DECREMENT:
			return {...state, counter: state.counter - 1};
		case ADD:
			return {...state, counter: state.counter + action.value};
		case SUBTRACT:
			return {...state, counter: state.counter - action.value};
		case FETCH_COUNTER_REQUEST:
			return {...state, loading: true};
		case FETCH_COUNTER_SUCCESS:
			return {...state, loading: false, counter: action.counter};
		case FETCH_COUNTER_FAILURE:
			return {...state, loading: false};
		case PUT_COUNTER:
			return {...state, loading: true};
		default:
			return state;
	}

	return state;
}

export default reducer;
