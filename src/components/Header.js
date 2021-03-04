import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { newGroupMetadata } from '../App';
import { v4 as uuid } from 'uuid';

const Header = () => {
	const { dispatchData } = useContext(AppContext);

	const handleAddNewGroup = () => {
		dispatchData({ type: 'ADD_GROUP', payload: { groupId: uuid(), newGroup: newGroupMetadata } });
	};
	return (
		<header className="bg-primary px-3">
			<div className="text-light d-flex justify-content-start align-items-center ">
				<h3 className="p-2 mx-5">Counter</h3>
				<button
					onClick={handleAddNewGroup}
					className="add-new-counter btn btn-sm bg-light text-primary border px-3 mr-3"
				>
					<FontAwesomeIcon icon={faPlusCircle} />
				</button>
			</div>
		</header>
	);
};

export default Header;
