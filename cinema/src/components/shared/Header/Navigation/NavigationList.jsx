import NavigationListItem from "./NavigationListItem";
import PropTypes from "prop-types";

import {
	SCHEDULE_PATH,
	ABOUT_PATH,
	COMMENTS_PATH,
	FILMS_PATH,
} from "../../../../constants/routes";

function NavigationList({ isActive, setIsActive }) {
	return (
		<ul className={"navigation " + (isActive && "active")}>
			<NavigationListItem
				setIsActive={setIsActive}
				page="Films"
				path={FILMS_PATH}
			/>
			<NavigationListItem
				setIsActive={setIsActive}
				page="Schedule"
				path={SCHEDULE_PATH}
			/>
			<NavigationListItem
				setIsActive={setIsActive}
				page="About us"
				path={ABOUT_PATH}
			/>
			<NavigationListItem
				setIsActive={setIsActive}
				page="Comments"
				path={COMMENTS_PATH}
			/>
		</ul>
	);
}

NavigationList.propTypes = {
	isActive: PropTypes.bool,
	setIsActive: PropTypes.func,
};
export default NavigationList;
