import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavigationListItem({ page, path, isActive }) {
	return (
		<li className={"navigation-list__item " + (isActive ? "active" : "")}>
			<Link to={path}>{page}</Link>
		</li>
	);
}

NavigationListItem.propTypes = {
	page: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	path: PropTypes.string.isRequired,
};

export default NavigationListItem;
