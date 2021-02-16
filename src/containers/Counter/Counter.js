import React, {useEffect} from 'react';
import './Counter.css';
import {useDispatch, useSelector} from "react-redux";
import {add, decrement, fetchCounter, increment, putCounter, subtract} from "../../store/action";

const STEP_VALUE = 5;

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter);

	const buttons = {
		'Increase': () => dispatch(increment()),
		'Decrease': () => dispatch(decrement()),
		'Increase by 100': () => dispatch(add(100)),
		['Increase by ' + STEP_VALUE]: () => dispatch(add(STEP_VALUE)),
		['Decrease by ' + STEP_VALUE]: () => dispatch(subtract(STEP_VALUE))
	}

	useEffect(() => {
		dispatch(fetchCounter());
	}, [dispatch]);

	const submitCounter = e => {
		e.preventDefault();
		putCounter(counter).then(console.error);
	}

	return (
		<div className="Counter">
			<form onSubmit={submitCounter}>
				<p>COUNTER:</p>
				<h1>{counter}</h1>
				{Object.keys(buttons).map((title, id) => (
					<button key={id} onClick={buttons[title]} type="submit">{title}</button>
				))}
			</form>
		</div>
	);
};

export default Counter;