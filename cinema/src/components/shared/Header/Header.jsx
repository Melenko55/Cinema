import { useState } from "react";

import NavigationList from "./Navigation/NavigationList";
import { MyLink } from "../MyLink";

import "./Header.scss";

import logo from "../../../assets/Logo.png";
import cross from "../../../assets/Cross.png";
import hamburger from "../../../assets/Hamburger.png";

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<header>
			<MyLink className="logo_icon">
				<img src={logo} alt="logo" />
			</MyLink>

			<div className="logo_naming">
				<span>Pleasure</span> films
			</div>

			<NavigationList setIsActive={setIsActive} isActive={isActive} />

			<button
				onClick={() => setIsActive((prev) => !prev)}
				className={"btn-toggle " + (isActive && "active")}
			>
				{isActive ? <img src={cross} /> : <img src={hamburger} />}
			</button>
		</header>
	);
}

export default Header;
