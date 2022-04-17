import { useState } from "react";
import PropTypes from "prop-types";
function ScheduleFilmCard({ film }) {
	const { id, img, title, times } = film;
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			key={id}
			className="schedule-container__item"
		>
			<img className="film__img" src={img} alt={title} />
			<div className={"hovered-content " + (isHovered ? "active" : "")}>
				<button className="btn-tickets">Купити</button>
				<div className="more-info">Детальніше</div>
				<div className="hovered-times">
					{times.map((time, index) => (
						<div key={index} className="hovered-time">
							{time}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

ScheduleFilmCard.propTypes = {
	film: PropTypes.object.isRequired,
};
export default ScheduleFilmCard;
