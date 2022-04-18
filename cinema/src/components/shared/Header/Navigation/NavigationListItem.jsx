import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { MyLink } from "../../MyLink";

const NavigationListItem = ({ page, path, setIsActive }) => {
	const { pathname } = useLocation();

	return (
		<li
			onClick={() => setIsActive(false)}
			className={
				"navigation__item " + (pathname === path ? "current" : "")
			}
		>
			<MyLink path={path}>{page}</MyLink>
		</li>
	);
};

NavigationListItem.propTypes = {
	page: PropTypes.string,
	path: PropTypes.string,
	setIsActive: PropTypes.func,
};

export default NavigationListItem;
