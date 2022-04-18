import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export const MyLink = ({ type = "internal", path = "/", children }) => {
	return type === "internal" ? (
		<Link to={path}>{children}</Link>
	) : (
		<a href={path}>{children}</a>
	);
};

MyLink.propTypes = {
	type: PropTypes.string,
	path: PropTypes.string,
	children: PropTypes.node,
};
