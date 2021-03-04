import './App.css';
import { useReducer } from 'react';
import { AppContext } from './context/AppContext';
import { counterReducer } from './reducer/counter-reducer';
import { v4 as uuid } from 'uuid';
import CounterApp from './components/CounterApp';

export default function App() {
	return (
		<div className="App">
			<CounterProvider>
				<CounterApp />
			</CounterProvider>
		</div>
	);
}

export const CounterProvider = ({ children }) => {
	const [ data, dispatchData ] = useReducer(counterReducer, { [uuid()]: newGroupMetadata });
	return <AppContext.Provider value={{ data, dispatchData }}> {children} </AppContext.Provider>;
};

export const newCounterMetadata = { value: 0, label: 'New Counter' };

export const newGroupMetadata = {
	label: 'New Group',
	negativeValueAllowed: false,
	limit: 10000,
	incrementBy: 1,
	counters: {
		[uuid()]: newCounterMetadata
	}
};
