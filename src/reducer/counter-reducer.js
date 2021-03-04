export const counterReducer = (state, action) => {
	const { groupId } = action.payload;
	const counterGroup = state[groupId];
	switch (action.type) {
		case 'INCREMENT':
			return { ...state, [groupId]: handleCounterGroupState(counterGroup, action.type, action.payload) };
		case 'DECREMENT':
			return { ...state, [groupId]: handleCounterGroupState(counterGroup, action.type, action.payload) };
		case 'RESET_VALUE':
			return { ...state, [groupId]: handleCounterGroupState(counterGroup, action.type, action.payload) };
		case 'LABEL':
			return { ...state, [groupId]: handleCounterGroupState(counterGroup, action.type, action.payload) };
		case 'ALLOW_NEGATIVE_VALUE':
			return {
				...state,
				[groupId]: {
					...counterGroup,
					negativeValueAllowed: action.payload.allowNegative
				}
			};
		case 'GROUP_LABEL':
			return {
				...state,
				[groupId]: {
					...counterGroup,
					label: action.payload.label
				}
			};
		case 'SET_LIMIT':
			return {
				...state,
				[groupId]: {
					...counterGroup,
					limit: action.payload.limit
				}
			};
		case 'INCREMENT_BY':
			return {
				...state,
				[groupId]: {
					...counterGroup,
					incrementBy: action.payload.incrementBy
				}
			};
		case 'ADD_GROUP':
			state[groupId] = action.payload.newGroup;
			return { ...state };
		case 'ADD_COUNTER':
			state[groupId].counters[action.payload.id] = action.payload.newCounter;
			return { ...state };
		default:
			return state;
	}
};

const handleCounterState = (actionType, payload, counterState) => {
	if (actionType === 'INCREMENT') {
		return { ...counterState, value: counterState.value + payload.incrementBy };
	}
	if (actionType === 'DECREMENT') {
		return { ...counterState, value: counterState.value - payload.incrementBy };
	}
	if (actionType === 'RESET_VALUE') {
		return { ...counterState, value: payload.value };
	}
	if (actionType === 'LABEL') {
		return { ...counterState, label: payload.label };
	}
};

const handleCounterGroupState = (group, actionType, payload) => {
	const previousCounterState = group.counters[payload.id];
	const newCounterState = handleCounterState(actionType, payload, previousCounterState);
	return {
		...group,
		counters: {
			...group.counters,
			[payload.id]: newCounterState
		}
	};
};
