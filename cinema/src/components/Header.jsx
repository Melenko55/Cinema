import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import "./Header.scss";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<header className="header">
			<div className="logo">
				<img src={logo} alt="" />
			</div>

			{/* <nav className="navigation">
				<ul className="navigation-list">
					<li className="navigation-list__item active">
						<a href="">Films</a>
					</li>
					<li className="navigation-list__item">
						<a href="">Schedule</a>
					</li>
					<li className="navigation-list__item">
						<a href="">About us</a>
					</li>
					<li className="navigation-list__item">
						<a href="">Comments</a>
					</li>
				</ul>
			</nav> */}
			<div
				onClick={() => setIsMenuOpen((prev) => !prev)}
				className={"hamburger " + (isMenuOpen && "active")}
			>
				<div className="hamburger__line left"></div>
				<div className="hamburger__line center"></div>
				<div className="hamburger__line right"></div>
			</div>
		</header>
	);
}

export default Header;
