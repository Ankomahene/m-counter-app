import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CounterOptions = ({ options }) => {
	const { dispatchData } = useContext(AppContext);
	const { groupId, negativeValueAllowed, limit, incrementBy } = options;

	const handleNegativeValueAllowed = () => {
		dispatchData({ type: 'ALLOW_NEGATIVE_VALUE', payload: { groupId, allowNegative: !negativeValueAllowed } });
	};

	const handleLimit = value => {
		dispatchData({ type: 'SET_LIMIT', payload: { groupId, limit: Number(value) } });
	};

	const handleIncrementValue = value => {
		dispatchData({ type: 'INCREMENT_BY', payload: { groupId, incrementBy: Number(value) } });
	};

	return (
		<div>
			<div className="form-check form-switch mb-3">
				<input
					onChange={handleNegativeValueAllowed}
					className="form-check-input"
					type="checkbox"
					id={groupId}
					checked={negativeValueAllowed}
				/>
				<small className="form-check-label" htmlFor={groupId}>
					Negative Value
				</small>
			</div>
			<div className="input-group input-group-sm mb-3">
				<span className="input-group-text" id={groupId}>
					Limit
				</span>
				<input
					value={limit}
					onChange={e => handleLimit(e.target.value)}
					type="number"
					min="1"
					className="form-control"
				/>
			</div>

			<div className="input-group input-group-sm mb-3">
				<span className="input-group-text">Increment By</span>
				<input
					value={incrementBy}
					onChange={e => handleIncrementValue(e.target.value)}
					type="number"
					min="1"
					className="form-control"
				/>
			</div>
		</div>
	);
};

export default CounterOptions;
