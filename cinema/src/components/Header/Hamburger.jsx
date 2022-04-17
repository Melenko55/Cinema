import PropTypes from "prop-types";
import "./Hamburger.scss";

function Hamburger({ isMenuOpen, setIsMenuOpen }) {
	return (
		<div
			onClick={() => setIsMenuOpen((prev) => !prev)}
			className={"hamburger " + (isMenuOpen && "active")}
		>
			<div className="hamburger-container"></div>
		</div>
	);
}

Hamburger.propTypes = {
	isMenuOpen: PropTypes.bool.isRequired,
	setIsMenuOpen: PropTypes.func.isRequired,
};

export default Hamburger;
