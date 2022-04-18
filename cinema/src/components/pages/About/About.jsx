import { ABOUT_PARAGRAPHS, ABOUT_TITLE } from "../../../constants/pages";

import "./About.scss";
import about from "../../../assets/about.png";
import Button from "../../shared/Button";

const About = () => {
	return (
		<section className="about">
			<h3>{ABOUT_TITLE}</h3>
			<img src={about} alt="about" />

			{ABOUT_PARAGRAPHS.map((paragraph, index) => (
				<p key={index}>{paragraph}</p>
			))}

			<Button
				classNames={"btn-thanks"}
				text={`Цінуємо ваш час тому створили змогу купувати та бронювати квитки онлайн`}
			/>
		</section>
	);
};

export default About;
