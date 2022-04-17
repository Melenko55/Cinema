import NavigationListItem from "./NavigationListItem";
import PropTypes from "prop-types";

function NavigationList({ isMenuOpen, isMobile }) {
	return (
		<ul
			className={
				"navigation-list " +
				(isMobile ? (isMenuOpen ? "show" : "") : "show")
			}
		>
			<NavigationListItem page="Films" isActive={true} path={"films"} />
			<NavigationListItem page="Schedule" isActive={false} path={"/"} />
			<NavigationListItem
				page="About us"
				isActive={false}
				path={"about"}
			/>
			<NavigationListItem
				page="Comments"
				isActive={false}
				path={"comments"}
			/>
		</ul>
	);
}

NavigationList.propTypes = {
	isMobile: PropTypes.bool.isRequired,
	isMenuOpen: PropTypes.bool.isRequired,
};
export default NavigationList;
