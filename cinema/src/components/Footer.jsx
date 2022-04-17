import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import "./Footer.scss";

function Footer() {
	return (
		<footer>
			<div className="details">
				За детальною інформацією звертайтесь за номером 099-999-99-99
			</div>
			<div className="social">
				<a href="https://www.facebook.com/">
					<img src={facebook} alt="facebook" />
				</a>
				<a href="https://www.instagram.com/">
					<img src={instagram} alt="instagram" />
				</a>
				<a href="https://web.telegram.org/k/">
					<img src={telegram} alt="telegram" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
