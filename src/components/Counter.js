import { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../context/AppContext';

const Counter = ({ id, options, counter }) => {
	const { dispatchData } = useContext(AppContext);
	const { groupId, incrementBy, negativeValueAllowed, limit } = options;
	const { label, value } = counter;

	const handleAdd = () => {
		dispatchData({ type: 'INCREMENT', payload: { groupId, id, incrementBy, prevValue: value } });
	};

	const handleSubtract = () => {
		dispatchData({ type: 'DECREMENT', payload: { groupId, id, incrementBy, prevValue: value } });
	};

	const handleSetLabel = label => {
		dispatchData({ type: 'LABEL', payload: { groupId, id, label } });
	};

	useEffect(
		() => {
			if (!negativeValueAllowed) {
				if (value < 0) dispatchData({ type: 'RESET_VALUE', payload: { groupId, id, value: 0 } });
			}

			if (value > limit) dispatchData({ type: 'RESET_VALUE', payload: { groupId, id, value: limit } });
		},
		[ value, negativeValueAllowed, groupId, id, dispatchData, limit ]
	);

	return (
		<div className="Counter border-top border-primary mx-auto shadow my-2">
			<div className="mb-1">
				<input
					className="label-field"
					type="text"
					value={label}
					onChange={e => handleSetLabel(e.target.value)}
				/>
			</div>
			<div className="d-flex justify-content-between">
				<button onClick={handleSubtract}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
				<div className="value"> {value} </div>
				<button onClick={handleAdd}>
					<FontAwesomeIcon icon={faAngleRight} />
				</button>
			</div>
		</div>
	);
};

export default Counter;
