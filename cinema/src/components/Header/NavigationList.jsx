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
			<NavigationListItem page="Films" isActive={true} path={"/"} />
			<NavigationListItem page="Schedule" isActive={false} path={"/"} />
			<NavigationListItem page="About us" isActive={false} path={"/"} />
			<NavigationListItem page="Comments" isActive={false} path={"/"} />
		</ul>
	);
}

NavigationList.propTypes = {
	isMobile: PropTypes.bool.isRequired,
	isMenuOpen: PropTypes.bool.isRequired,
};
export default NavigationList;
