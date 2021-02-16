import axios from "axios";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_FAILURE = 'FETCH_COUNTER_FAILURE';

export const PUT_COUNTER = 'PUT_COUNTER';

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
export const add = value => ({type: ADD, value});
export const subtract = value => ({type: SUBTRACT, value	});

export const fetchCounterRequest = () => ({type: FETCH_COUNTER_REQUEST});
export const fetchCounterSuccess = counter => ({type: FETCH_COUNTER_SUCCESS, counter});
export const fetchCounterFailure = () => ({type: FETCH_COUNTER_FAILURE});

export const putCounterType = () => ({type: PUT_COUNTER});

const url = 'https://js-burger-6e475-default-rtdb.firebaseio.com/counter.json';

export const fetchCounter = () => {
	return async dispatch => {
		dispatch(fetchCounterRequest());

		try {
			const response = await axios.get(url);
			dispatch(fetchCounterSuccess(response.data));
		} catch (e) {
			dispatch(fetchCounterFailure())
		}
	}
};

export const putCounter = async data => {

	try {
		await axios.put(url, data);
		putCounterType();
	} catch (e) {
		console.log(e);
	}
};