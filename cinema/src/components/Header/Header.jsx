import { useState } from "react";
import Hamburger from "./Hamburger";

import "./Header.scss";
import Logo from "./Logo";
import NavigationList from "./NavigationList";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<header className="header">
			<Logo />

			<nav className="navigation">
				<NavigationList
					isMenuOpen={isMenuOpen}
					isMobile={window.innerWidth < 768}
				/>
			</nav>

			<Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</header>
	);
}

export default Header;
