import { MyLink } from "../MyLink";

import { FOOTER_DETAILS } from "../../../constants/pages";

import "./Footer.scss";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import telegram from "../../../assets/telegram.png";

const Footer = () => {
	return (
		<footer>
			<p className="details">{FOOTER_DETAILS}</p>
			<section className="social">
				<MyLink path="https://www.facebook.com/" type="external">
					<img src={facebook} alt="facebook" />
				</MyLink>
				<MyLink path="https://www.instagram.com/" type="external">
					<img src={instagram} alt="instagram" />
				</MyLink>
				<MyLink path="https://web.telegram.org/k/" type="external">
					<img src={telegram} alt="telegram" />
				</MyLink>
			</section>
		</footer>
	);
};

export default Footer;
