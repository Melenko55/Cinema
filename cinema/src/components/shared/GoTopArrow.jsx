import { useEffect, useState } from "react";

import "./GoTopArrow.scss";
import arrow from "../../assets/Arrow.png";

const GoTopArrow = () => {
	const [showArrow, setShowArrow] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > document.documentElement.clientHeight) {
				setShowArrow(true);
			} else {
				setShowArrow(false);
			}
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	if (showArrow) {
		return (
			<div id="go-top-arrow" onClick={scrollToTop} className="arrow-back">
				<img src={arrow} alt="" />
			</div>
		);
	}
};

export default GoTopArrow;
