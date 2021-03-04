import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import CounterGroup from './CounterGroup';
import Header from './Header';

const CounterApp = () => {
	const { data } = useContext(AppContext);
	return (
		<div>
			<Header />
			<div className="main-container">
				{Object.keys(data).map(groupId => (
					<CounterGroup key={groupId} groupId={groupId} group={data[groupId]} />
				))}
			</div>
		</div>
	);
};

export default CounterApp;
