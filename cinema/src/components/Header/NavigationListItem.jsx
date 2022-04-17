import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavigationListItem({ page, path, current, setIsActive }) {
	return (
		<li
			onClick={() => setIsActive(false)}
			className={"navigation__item " + (current ? "current" : "")}
		>
			<Link to={path}>{page}</Link>
		</li>
	);
}

NavigationListItem.propTypes = {
	page: PropTypes.string.isRequired,
	current: PropTypes.bool.isRequired,
	path: PropTypes.string.isRequired,
	setIsActive: PropTypes.func.isRequired,
};

export default NavigationListItem;
