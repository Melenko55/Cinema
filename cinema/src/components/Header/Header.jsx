import { useState } from "react";
import "./Header.scss";
import NavigationList from "./NavigationList";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import cross from "../../assets/Cross.png";
import hamburger from "../../assets/Hamburger.png";

function Header() {
	const [isActive, setIsActive] = useState(false);

	return (
		<header>
			<Link className="logo_icon" to={"/"}>
				<img src={logo} alt="logo" />
			</Link>

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
