import PropTypes from "prop-types";

function NavigationListItem({ page, path, isActive }) {
	return (
		<li className={"navigation-list__item " + (isActive ? "active" : "")}>
			<a href={path}>{page}</a>
		</li>
	);
}

NavigationListItem.propTypes = {
	page: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	path: PropTypes.string.isRequired,
};

export default NavigationListItem;
