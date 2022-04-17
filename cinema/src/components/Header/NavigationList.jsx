import NavigationListItem from "./NavigationListItem";
import PropTypes from "prop-types";

function NavigationList({ isActive, setIsActive }) {
	return (
		<ul className={"navigation " + (isActive && "active")}>
			<NavigationListItem
				setIsActive={setIsActive}
				page="Films"
				current={true}
				path={"films"}
			/>
			<NavigationListItem
				setIsActive={setIsActive}
				page="Schedule"
				current={false}
				path={"/"}
			/>
			<NavigationListItem
				setIsActive={setIsActive}
				page="About us"
				current={false}
				path={"about"}
			/>
			<NavigationListItem
				setIsActive={setIsActive}
				page="Comments"
				current={false}
				path={"comments"}
			/>
		</ul>
	);
}

NavigationList.propTypes = {
	isActive: PropTypes.bool.isRequired,
	setIsActive: PropTypes.func.isRequired,
};
export default NavigationList;
