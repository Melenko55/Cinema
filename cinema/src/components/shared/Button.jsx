import PropTypes from "prop-types";

const Button = ({ classNames, onClick, text }) => {
	return (
		<button className={classNames} onClick={onClick}>
			{text}
		</button>
	);
};

Button.propTypes = {
	classNames: PropTypes.string,
	onClick: PropTypes.func,
	text: PropTypes.string,
};

export default Button;
